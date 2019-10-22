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
import { useLocation } from 'react-router';

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
  const [currentFilterIndex, setCurrentFilter] = React.useState(0);
  const classes = useStyle();

  const handleChangeFilter = (
    event: React.ChangeEvent<{}>,
    newFilterIndex: number
  ) => {
    setCurrentFilter(newFilterIndex);
  };

  const handleChangeIndex = (newIndex: number) => {
    setCurrentFilter(newIndex);
  };

  return (
    <Grid container item xs direction="column">
      <Grid item className={classes.tabsGrid}>
        <EventTabs
          events={events}
          currentFilterIndex={currentFilterIndex}
          onFilterChange={handleChangeFilter}></EventTabs>
      </Grid>
      <Grid item xs>
        <SwipeableViews
          axis="x"
          index={currentFilterIndex}
          onChangeIndex={handleChangeIndex}>
          {events.map((event, i) => (
            <TabPanel index={i} key={i} value={currentFilterIndex}>
              {event.label}
            </TabPanel>
          ))}
        </SwipeableViews>
      </Grid>
    </Grid>
  );
};

export default Events;
