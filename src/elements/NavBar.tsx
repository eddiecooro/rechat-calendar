import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import {
  Today as CalenderIcon,
  PermContactCalendar as PermContactCalendarIcon,
  MonetizationOn as MonetizationOnIcon
} from '@material-ui/icons';

const useStyle = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing(4, 0)
    },
    button: {
      margin: theme.spacing(1, 0),
      '&.active': {
        backgroundColor: theme.palette.primary.light
      },
      '&:hover': {
        backgroundColor: theme.palette.grey[200]
      }
    }
  })
);

type NavBarIconProps = {
  to: string;
  Icon: React.ElementType;
};
const NavBarIcon: React.FC<NavBarIconProps> = ({ to, Icon }) => {
  const classes = useStyle();
  return (
    <IconButton
      className={classes.button}
      to={to}
      activeClassName="active"
      component={NavLink}>
      <Icon color="primary" />
    </IconButton>
  );
};

const NavBar: React.FC = () => {
  const classes = useStyle();
  return (
    <Grid
      className={classes.root}
      container
      item
      direction="column"
      justify="flex-start"
      alignItems="center">
      <NavBarIcon to="/dashboard/calender" Icon={CalenderIcon} />
      <NavBarIcon to="/dashboard/contacts" Icon={PermContactCalendarIcon} />
      <NavBarIcon to="/dashboard/deals" Icon={MonetizationOnIcon} />
    </Grid>
  );
};

export default NavBar;
