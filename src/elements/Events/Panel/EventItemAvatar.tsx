import React from 'react';
import { ListItemAvatar, Avatar } from '@material-ui/core';
import { Today, Redeem, Phone } from '@material-ui/icons';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EventTypes } from 'api/apiTypes';

const useStyle = makeStyles({
  listItemAvatarContainer: { minWidth: 'unset', marginRight: '0.75rem' },
  listItemAvatar: { width: '2rem', height: '2rem' }
});

type EventAvatarProps = {
  eventType: EventTypes;
};

const EventAvatar: React.FC<EventAvatarProps> = ({ eventType }) => {
  const classes = useStyle();

  let avatar;
  switch (eventType) {
    case 'birthday':
      avatar = (
        <Avatar
          style={{ backgroundColor: '#f5a62333' }}
          className={classes.listItemAvatar}>
          <Redeem htmlColor="#f5a623" fontSize="small" />
        </Avatar>
      );
      break;
    case 'Call':
      avatar = (
        <Avatar
          style={{ backgroundColor: '#f5a62333' }}
          className={classes.listItemAvatar}>
          <Phone htmlColor="#f5a623" fontSize="small" />
        </Avatar>
      );
      break;
  }

  return (
    <ListItemAvatar className={classes.listItemAvatarContainer}>
      {avatar}
    </ListItemAvatar>
  );
};

export default EventAvatar;
