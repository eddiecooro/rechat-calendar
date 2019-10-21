import React from 'react';
import NavBar from 'elements/NavBar';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FullHeightGrid from 'components/FullHeightGrid';
import { Redirect } from 'react-router';

const useStyles = makeStyles({
  navBar: {
    width: '55px',
    height: '100%'
  }
});

const Dashboard: React.FC<RouteConfigComponentProps> = ({ route, match }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isNotXS = useMediaQuery(theme.breakpoints.up('sm'));

  if (match.isExact) {
    return <Redirect to="/dashboard/calender" />;
  }

  return (
    <FullHeightGrid>
      <Grid xs="auto" className={classes.navBar} container item>
        <NavBar />
      </Grid>
      <Grid
        xs
        item
        container
        zeroMinWidth
        wrap="nowrap"
        direction={isNotXS ? 'row' : 'column'}>
        {route ? renderRoutes(route.routes) : null}
      </Grid>
    </FullHeightGrid>
  );
};

export default Dashboard;
