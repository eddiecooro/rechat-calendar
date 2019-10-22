import React from 'react';
import { Grid } from '@material-ui/core';
import { EventTabs } from './EventTabs';

const Events: React.FC = () => {
  const [currentFilter, setCurrentFilters] = React.useState(0);

  const handleChangeFilter = (
    event: React.ChangeEvent<{}>,
    newFilterIndex: number
  ) => {
    setCurrentFilters(newFilterIndex);
  };

  return (
    <Grid container item xs direction="column">
      <Grid item xs>
        <EventTabs
          currentFilter={currentFilter}
          onFilterChange={handleChangeFilter}></EventTabs>
      </Grid>
    </Grid>
  );
};

export default Events;
