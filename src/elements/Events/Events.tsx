import React from 'react';
import { EventFilterTab } from './types';
import { Grid } from '@material-ui/core';
import { EventTabs } from './EventTabs';
import { makeStyles } from '@material-ui/styles';
import {
  AccessTime,
  Phone,
  Redeem,
  EventAvailable,
  MailOutline
} from '@material-ui/icons';
import useSyncWithHash from 'hooks/useSyncWithHash';
import TabPanels from './TabPanels';

const useStyle = makeStyles({
  tabsGrid: {
    maxWidth: '100%'
  },
  panelsGrid: {
    minHeight: 0
  }
});

export const filters: EventFilterTab[] = [
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
      [filters[0].label]: 0,
      [filters[1].label]: 1,
      [filters[2].label]: 2,
      [filters[3].label]: 3,
      [filters[4].label]: 4,
      [filters[5].label]: 5
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
          filters={filters}
          currentFilterIndex={filterIndex}
          onFilterChange={handleChangeFilterEvent}></EventTabs>
      </Grid>
      <Grid item xs className={classes.panelsGrid}>
        <TabPanels
          filters={filters}
          filterIndex={filterIndex}
          handleChangeFilterIndex={handleChangeFilterIndex}
        />
      </Grid>
    </Grid>
  );
};

export default Events;
