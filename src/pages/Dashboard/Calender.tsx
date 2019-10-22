import React from 'react';
import Calender from 'elements/Calender';
import Events from 'elements/Events/Events';
import { RouteConfigComponentProps } from 'react-router-config';
import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    calender: {
      [theme.breakpoints.up('xs')]: {
        maxWidth: '100%'
      },
      [theme.breakpoints.up('sm')]: {
        flexBasis: '290px',
        maxWidth: '290px'
      }
    }
  })
);

const CalenderPage: React.FC<RouteConfigComponentProps> = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.calender}
        container
        item
        sm={'auto'}
        xs={5} // Column
        lg={3}>
        <Calender />
      </Grid>
      <Grid zeroMinWidth item container xs>
        <Events />
      </Grid>
    </>
  );
};

export default CalenderPage;
