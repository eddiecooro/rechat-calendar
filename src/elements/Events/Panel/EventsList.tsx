import React from 'react';
import { EventFilterTab } from '../types';
import { Box, List } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import FormatScrollBar from 'components/FormatScrollBar';
import FullHeightGrid from 'components/FullHeightGrid';
import EventDay from './EventDay';
import * as CalendarAPI from 'api/calender';
import {
  generateDays,
  millisecondsInADay,
  getDaysAgo,
  getAbsoluteDay
} from 'utils/dateUtils';
import { getArrayFromGenerator } from 'utils/generatorUtils';
import { EventExt } from 'api/apiTypes';
import useThrottledCallback from 'hooks/useThrottledCallback';

const useStyle = makeStyles(theme =>
  createStyles({
    flexContainer: {
      overflow: 'auto'
    }
  })
);

type EventsListProps = {
  filter: EventFilterTab;
};

type FetchedDay = {
  day: Date;
  events: EventExt[];
};

const EventsList: React.FC<EventsListProps> = React.memo(({ filter }) => {
  const dayGenerator = React.useMemo(() => generateDays(getDaysAgo(100)), []);
  const [days, setDays] = React.useState(() =>
    getArrayFromGenerator(dayGenerator, 200, 'forward')
  );
  const daysToFetch = React.useRef<Date[]>([]);
  const [fetchedDays, setFetchedDays] = React.useState<{
    [day: number]: FetchedDay;
  }>([]);

  const fetchEnqueuedDays = async () => {
    const fetchingDays = daysToFetch.current;
    console.log('DAYS', fetchingDays);
    if (!fetchingDays.length) return;

    daysToFetch.current = [];
    const { data } = await CalendarAPI.getRange(
      String(fetchingDays[0].getTime() / 1000),
      String(fetchingDays[fetchingDays.length - 1].getTime() / 1000)
    );
    console.log('DATA', data);

    const newFetchedDays = data.reduce((prev: typeof fetchedDays, c) => {
      const day = new Date(getAbsoluteDay(new Date(c.timestamp * 1000)));
      const dayTimestamp = day.getTime();
      return {
        ...prev,
        [dayTimestamp]: {
          day,
          events: prev[dayTimestamp] ? prev[dayTimestamp].events.concat(c) : [c]
        }
      };
    }, {});

    setFetchedDays(prev => {
      const fetchedDays = {
        ...prev,
        ...newFetchedDays
      };
      for (let day of fetchingDays) {
        const time = day.getTime();
        if (!fetchedDays[time]) {
          fetchedDays[time] = {
            day,
            events: []
          };
        }
      }
      return fetchedDays;
    });
  };

  const throttledFetchDays = useThrottledCallback(fetchEnqueuedDays, [], 1000);

  const enqeueDayForFetch = React.useCallback((day: Date) => {
    if (!fetchedDays[day.getTime()]) {
      daysToFetch.current.push(day);
    }
    throttledFetchDays();
  }, []);

  const classes = useStyle();
  return (
    <FormatScrollBar>
      <Box clone width={1} height={1}>
        <FullHeightGrid
          className={classes.flexContainer}
          direction="column"
          wrap="nowrap"
          container>
          <List>
            {days.map((day: Date) => {
              const timestamp = day.getTime();
              const fetchedDay = fetchedDays[timestamp];
              const events = fetchedDay ? fetchedDay.events : undefined;
              return (
                <EventDay
                  active
                  key={timestamp}
                  day={day}
                  dayEvents={events}
                  onMount={() => enqeueDayForFetch(day)}
                />
              );
            })}
          </List>
        </FullHeightGrid>
      </Box>
    </FormatScrollBar>
  );
});

export default EventsList;
