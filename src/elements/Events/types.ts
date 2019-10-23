import React from 'react';
import { SvgIconComponent } from '@material-ui/icons';

export type EventFilterTab = {
  component?: React.ComponentType<{
    [key: string]: any;
    event: EventFilterTab;
  }>;
  label: string;
  icon?: SvgIconComponent;
};
