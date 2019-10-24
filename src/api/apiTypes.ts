type Contact = {
  id: string;
  display_name: string;
  first_name: string;
  last_name: string;
  email: string;
};

type Association = {
  id: string;
} & (
  | {
      association_type: 'contact' | 'deal' | 'listing';
      contact: Contact;
    }
  | {
      association_type: 'deal';
    }
  | {
      association_type: 'listing';
    });

export type EventTypes = 'Call' | 'birthday';
export type CalenderType = {
  id: string;
  title: string;
  event_type: EventTypes;
  type_label: string;
  timestamp: number;
  status: string;
  full_crm_task?: {
    id: string;
    created_at: string;
    updated_at: string;
    title: string;
    description?: string;
    task_type: string;
    status: string;
    associations: Association[];
  };
  full_contact?: Contact;
};

export type EventExt = {
  type: EventTypes;
  label: string;
  timestamp: number;
  status: string;
  title: string;
  description?: string;
  full_name: string;
};
