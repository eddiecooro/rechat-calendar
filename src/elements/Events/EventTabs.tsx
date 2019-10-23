import React, { ChangeEvent } from 'react';
import { EventFilterTab } from './types';
import { Paper, Grid, Tabs, Button, Drawer } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CalendarTodayOutlined } from '@material-ui/icons';
import EventTab from './EventTab';
import { useToggle } from 'hooks';

const useStyle = makeStyles(theme =>
  createStyles({
    container: {
      padding: theme.spacing(1, 6, 0, 3),
      overflow: 'auto'
    },
    drawer: {
      [theme.breakpoints.up('xs')]: {
        width: '80vw'
      },
      [theme.breakpoints.up('sm')]: {
        width: '35vw'
      }
    }
  })
);

const useAddEventButtonClasses = makeStyles({
  root: {
    textTransform: 'none',
    borderRadius: '3px'
  },
  label: {
    whiteSpace: 'nowrap'
  }
});

export type EventTabsProps = {
  filters: EventFilterTab[];
  currentFilterIndex: number;
  onFilterChange: (e: ChangeEvent<{}>, value: number) => void;
};

export const EventTabs: React.FC<EventTabsProps> = ({
  currentFilterIndex,
  onFilterChange,
  filters: events
}) => {
  const [drawerIsOpen, toggleDrawer] = useToggle(false);
  const classes = useStyle();
  const addEventClasses = useAddEventButtonClasses();
  return (
    <Paper square className={classes.container}>
      <Grid container alignItems="center">
        <Grid item xs={10}>
          <Tabs
            value={currentFilterIndex}
            onChange={onFilterChange}
            variant="scrollable"
            indicatorColor="primary"
            scrollButtons="on"
            textColor="primary">
            {events.map((event, i) => (
              <EventTab
                key={i}
                label={event.label}
                icon={event.icon}></EventTab>
            ))}
          </Tabs>
        </Grid>

        <Grid item xs={2}>
          <Button
            classes={addEventClasses}
            onClick={toggleDrawer}
            startIcon={<CalendarTodayOutlined />}
            variant="contained"
            color="primary">
            Add Event
          </Button>
          <Drawer onClose={toggleDrawer} open={drawerIsOpen}>
            <div className={classes.drawer}></div>
          </Drawer>
        </Grid>
      </Grid>
    </Paper>
  );
};
