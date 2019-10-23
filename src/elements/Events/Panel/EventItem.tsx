import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import EventAvatar from './EventAvatar';
import { useStyle } from './EventDay';

type EventItemProps = {
  event: any;
};

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  const classes = useStyle();
  return (
    <ListItem button dense>
      {event.sub ? (
        <ListItemText
          className={classes.listItemTime}
          primaryTypographyProps={{
            variant: 'body1'
          }}
          primary={event.sub}></ListItemText>
      ) : null}
      {event.type ? <EventAvatar eventType={event.type} /> : null}
      {event.mainText || event.desc ? (
        <ListItemText
          primaryTypographyProps={{
            variant: 'subtitle2',
            noWrap: true,
            className: classes.listItemPrimaryText
          }}
          primary={event.mainText}
          secondary={event.desc}></ListItemText>
      ) : null}
    </ListItem>
  );
};

export default EventItem;
