import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme =>
  createStyles({
    root: { backgroundColor: theme.palette.common.white }
  })
);

const NavBar: React.FC = () => {
  const classes = useStyle();
  return (
    <Grid
      className={classes.root}
      container
      item
      justify="center"
      alignItems="center">
      <Typography variant="h6">Nav</Typography>
    </Grid>
  );
};

export default NavBar;
