import React from 'react';
import { EventFilterTab } from '../types';
import { Box, List } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import FormatScrollBar from 'components/FormatScrollBar';
import FullHeightGrid from 'components/FullHeightGrid';
import EventDay from './EventDay';

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

const EventsList: React.FC<EventsListProps> = ({ filter }) => {
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
            <EventDay active />
            <EventDay />
            <EventDay />
            <EventDay />
          </List>
        </FullHeightGrid>
      </Box>
    </FormatScrollBar>
  );
};

export default EventsList;
