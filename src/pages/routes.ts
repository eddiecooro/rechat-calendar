import { RouteConfig } from 'react-router-config';
import Rechat from './Rechat';
import Dashboard from './Dashboard/Dashboard';
import CalenderPage from './Dashboard/Calender';

const config: RouteConfig[] = [
  {
    component: Rechat,
    exact: true,
    path: '/'
  },
  {
    component: Dashboard,
    path: '/dashboard',
    routes: [
      {
        path: '/dashboard/calender',
        component: CalenderPage
      }
    ]
  }
];

export default config;
