import React, { ChangeEvent } from 'react';
import { Paper, Grid, Tabs, Button, Drawer } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  AccessTime,
  Phone,
  Redeem,
  EventAvailable,
  MailOutline,
  CalendarTodayOutlined
} from '@material-ui/icons';
import EventTab from './EventTab';

const useStyle = makeStyles(theme =>
  createStyles({
    container: {
      padding: theme.spacing(1, 1, 0, 3)
    },
    drawer: {
      width: '35vw'
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

type EventTabsProps = {
  currentFilter: number;
  onFilterChange: (e: ChangeEvent<{}>, value: number) => void;
};
export const EventTabs: React.FC<EventTabsProps> = ({
  currentFilter,
  onFilterChange
}) => {
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
  const classes = useStyle();
  const addEventClasses = useAddEventButtonClasses();
  const toggleDrawer = () => {
    setDrawerIsOpen(s => !s);
  };
  return (
    <Paper square className={classes.container}>
      <Grid container alignItems="center">
        <Grid item xs={10}>
          <Tabs
            value={currentFilter}
            onChange={onFilterChange}
            variant="scrollable"
            indicatorColor="primary"
            scrollButtons="on"
            textColor="primary">
            <EventTab label="All Events"></EventTab>
            <EventTab icon={AccessTime} label="Touches"></EventTab>
            <EventTab icon={Phone} label="Calls"></EventTab>
            <EventTab icon={Redeem} label="Celebrations"></EventTab>
            <EventTab icon={EventAvailable} label="Critical Dates"></EventTab>
            <EventTab icon={MailOutline} label="Scheduled Emails"></EventTab>
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
