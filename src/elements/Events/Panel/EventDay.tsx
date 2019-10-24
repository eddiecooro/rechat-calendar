import React from 'react';
import EventDayHeader from './EventDayHeader';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import EventItem from './EventItem';
import { EventExt } from 'api/apiTypes';
import { List } from '@material-ui/core';

export type EventDayProps = {
  active?: boolean;
  dayEvents?: EventExt[];
  day: Date;
  onMount: () => void;
};

const EventDay: React.FC<EventDayProps> = ({
  active,
  dayEvents,
  onMount,
  day
}) => {
  return (
    <>
      <EventDayHeader onMount={onMount} active={active}>
        {day.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric'
        })}
      </EventDayHeader>
      {dayEvents ? (
        dayEvents.length ? (
          dayEvents.map((event, i) => (
            <EventItem event={event} desc="All Day" key={i}></EventItem>
          ))
        ) : (
          <EventItem desc="No event set for this month!" />
        )
      ) : (
        <EventItem desc="Loading Events..." />
      )}
    </>
  );
};

export default EventDay;
