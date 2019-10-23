import React from 'react';
import { ListItemAvatar, Avatar } from '@material-ui/core';
import { Today } from '@material-ui/icons';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  listItemAvatarContainer: { minWidth: 'unset', marginRight: '0.75rem' },
  listItemAvatar: { width: '2rem', height: '2rem' }
});

type EventAvatarProps = {
  eventType: string;
};

const avatarsMap = {
  critical: (
    <Avatar>
      <Today color="error" />
    </Avatar>
  )
};
const EventAvatar: React.FC<EventAvatarProps> = ({ eventType }) => {
  const classes = useStyle();

  let avatar;
  switch (eventType) {
    case 'critical':
      avatar = (
        <Avatar
          style={{ backgroundColor: '#f5a62333' }}
          className={classes.listItemAvatar}>
          <Today htmlColor="#f5a623" fontSize="small" />
        </Avatar>
      );
      break;
    default:
  }

  return (
    <ListItemAvatar className={classes.listItemAvatarContainer}>
      {avatar}
    </ListItemAvatar>
  );
};

export default EventAvatar;
