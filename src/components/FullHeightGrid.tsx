import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles({
  fullHeight: {
    height: '100%'
  }
});

const FullHeightGrid: React.FC<React.ComponentProps<typeof Grid>> = props => {
  const classes = useStyles();
  return (
    <Grid
      {...props}
      container
      className={clsx(classes.fullHeight, props.className)}
    />
  );
};

export default FullHeightGrid;
