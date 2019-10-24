import React from 'react';
import { ListItemText } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EventExt } from 'api/apiTypes';

const useStyle = makeStyles(() =>
  createStyles({
    listItemPrimaryText: {
      fontSize: '1rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  })
);

type EventItemProps = {
  event: Partial<EventExt>;
};
const EventItemText: React.FC<EventItemProps> = ({ event }) => {
  const classes = useStyle();
  let child;
  if (event.type === 'Call') {
    child = 'Call';
  } else if (event.type === 'birthday') {
    child = 'Birthday';
  }
  return (
    <ListItemText
      primaryTypographyProps={{
        variant: 'subtitle2',
        noWrap: true,
        className: classes.listItemPrimaryText
      }}
      secondary={event.description}>
      {child}
    </ListItemText>
  );
};

export default EventItemText;
