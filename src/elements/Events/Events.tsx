import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Event } from './types';
import { Grid, Box, Typography } from '@material-ui/core';
import { EventTabs } from './EventTabs';
import { makeStyles } from '@material-ui/styles';
import { TypographyProps } from '@material-ui/core/Typography';
import {
  AccessTime,
  Phone,
  Redeem,
  EventAvailable,
  MailOutline
} from '@material-ui/icons';
import useSyncWithHash from 'hooks/useSyncWithHash';

interface TabPanelProps extends TypographyProps {
  index: number;
  value: number;
}
const TabPanel: React.FC<TabPanelProps> = ({
  value,
  index,
  children,
  ...rest
}) => {
  return (
    <Box hidden={Math.abs(index - value) > 1} p={3}>
      {children}
    </Box>
  );
};

const useStyle = makeStyles({
  tabsGrid: {
    maxWidth: '100%'
  }
});

const events: Event[] = [
  { label: 'All Events', icon: undefined },
  { label: 'Touches', icon: AccessTime },
  { label: 'Calls', icon: Phone },
  { label: 'Celebrations', icon: Redeem },
  { label: 'Critical Dates', icon: EventAvailable },
  { label: 'Scheduled Emails', icon: MailOutline }
];

const Events: React.FC = () => {
  const [filterIndex, setFilterIndex] = useSyncWithHash(
    {
      [events[0].label]: 0,
      [events[1].label]: 1,
      [events[2].label]: 2,
      [events[3].label]: 3,
      [events[4].label]: 4,
      [events[5].label]: 5
    },
    0
  );

  const classes = useStyle();

  const handleChangeFilterIndex = (newIndex: number) => {
    setFilterIndex(newIndex);
  };

  const handleChangeFilterEvent = (
    event: React.ChangeEvent<{}>,
    newFilterIndex: number
  ) => {
    handleChangeFilterIndex(newFilterIndex);
  };

  return (
    <Grid container item xs direction="column">
      <Grid item className={classes.tabsGrid}>
        <EventTabs
          events={events}
          currentFilterIndex={filterIndex}
          onFilterChange={handleChangeFilterEvent}></EventTabs>
      </Grid>
      <Grid item xs>
        <SwipeableViews
          axis="x"
          index={filterIndex}
          onChangeIndex={handleChangeFilterIndex}>
          {events.map((event, i) => (
            <TabPanel index={i} key={i} value={filterIndex}>
              {event.label}
            </TabPanel>
          ))}
        </SwipeableViews>
      </Grid>
    </Grid>
  );
};

export default Events;
