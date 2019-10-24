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

export type Event = {
  id: string;
  object_type: 'contact_attribute';
  event_type:
    | 'critical'
    | 'Call'
    | 'Message'
    | 'Todo'
    | 'Closing'
    | 'birthday'
    | 'scheduled_email';
  type_label: string;
  timestamp: number;
  date: string;
  recurring: boolean;
  type: 'calender_event';
  full_crm_task: unknown;
  full_contact: unknown;
};
