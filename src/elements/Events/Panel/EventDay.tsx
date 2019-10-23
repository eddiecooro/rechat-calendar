import React from 'react';
import { List } from '@material-ui/core';
import EventDayHeader from './EventDayHeader';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import EventItem from './EventItem';

export const useStyle = makeStyles(theme =>
  createStyles({
    listItemTime: {
      flexGrow: 0,
      paddingRight: theme.spacing(7),
      color: '#7f7f7f',
      alignSelf: 'flex-start'
    },
    listItemPrimaryText: {
      fontSize: '1rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  })
);

const emptyEvent = {
  sub: 'No event set for this month!'
};

const loadingEvent = {
  sub: 'Loading Events...'
};

export type EventDayProps = {
  active?: boolean;
  dayEvents?: any[];
};

const EventDay: React.FC<EventDayProps> = ({ active, dayEvents }) => {
  return (
    <List
      subheader={
        <EventDayHeader active={active}>
          Today - Tuesday, October 22
        </EventDayHeader>
      }>
      {dayEvents ? (
        dayEvents.length ? (
          dayEvents.map((event, i) => (
            <EventItem event={event} key={i}></EventItem>
          ))
        ) : (
          <EventItem event={emptyEvent} />
        )
      ) : (
        <EventItem event={loadingEvent} />
      )}
    </List>
  );
};

export default EventDay;
