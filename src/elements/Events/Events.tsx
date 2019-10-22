import React from 'react';
import { Grid } from '@material-ui/core';
import { EventTabs } from './EventTabs';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  tabsGrid: {
    maxWidth: '100%'
  }
});

const Events: React.FC = () => {
  const [currentFilter, setCurrentFilters] = React.useState(0);
  const classes = useStyle();

  const handleChangeFilter = (
    event: React.ChangeEvent<{}>,
    newFilterIndex: number
  ) => {
    setCurrentFilters(newFilterIndex);
  };

  return (
    <Grid container item xs direction="column">
      <Grid item className={classes.tabsGrid}>
        <EventTabs
          currentFilter={currentFilter}
          onFilterChange={handleChangeFilter}></EventTabs>
      </Grid>
      <Grid item xs>
      </Grid>
    </Grid>
  );
};

export default Events;
