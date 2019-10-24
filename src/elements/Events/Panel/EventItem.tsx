import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import EventAvatar from './EventItemAvatar';
import { EventExt } from 'api/apiTypes';
import EventItemText from './EventItemText';

const useStyle = makeStyles(theme =>
  createStyles({
    listItemTime: {
      flexGrow: 0,
      paddingRight: theme.spacing(7),
      color: '#7f7f7f',
      alignSelf: 'flex-start'
    }
  })
);

type EventItemProps = {
  event?: Partial<EventExt>;
  desc: string;
};

const EventItem: React.FC<EventItemProps> = ({ event, desc }) => {
  const classes = useStyle();
  return (
    <ListItem button dense>
      {desc ? (
        <ListItemText
          className={classes.listItemTime}
          primaryTypographyProps={{
            variant: 'body1'
          }}
          primary={desc}></ListItemText>
      ) : null}
      {event ? (
        <>
          {event.type ? <EventAvatar eventType={event.type} /> : null}
          <EventItemText event={event} />
        </>
      ) : null}
    </ListItem>
  );
};

export default EventItem;
