import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: theme.palette.grey[200]
    }
  })
);

const Calender: React.FC = () => {
  const classes = useStyle();
  return (
    <Grid
      className={classes.root}
      item
      container
      xs
      justify="center"
      alignItems="center">
      <Typography variant="h3">Calender</Typography>
    </Grid>
  );
};

export default Calender;
