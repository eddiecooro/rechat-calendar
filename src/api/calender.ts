import axios from './axios';
import { CalenderType, EventExt } from './apiTypes';

export const getRange = (low: string, high: string) => {
  return axios
    .get<CalenderType[]>('/calendar', {
      params: {
        low,
        high,
        associations: [
          'crm_task_associations',
          'calendar_event.full_crm_task',
          'crm_association.contact',
          'calendar_event.full_contact'
        ],
        object_types: [
          'contact',
          'contact_attribute',
          'crm_association',
          'email_campaign',
          'deal_context'
        ]
      },
      transformResponse: r => JSON.parse(r).data
    })
    .then(res => {
      return {
        ...res,
        data: res.data
          .filter(
            event =>
              event.event_type === 'Call' || event.event_type === 'birthday'
          )
          .map(event => {
            let eventObj: EventExt = {
              type: event.event_type,
              label: event.type_label,
              timestamp: event.timestamp,
              status: event.status,
              title: event.title,
              description:
                event.full_crm_task && event.full_crm_task.description,
              full_name: ''
            };
            if (event.full_contact) {
              eventObj.full_name = event.full_contact.display_name;
            } else if (
              event.full_crm_task &&
              event.full_crm_task.associations &&
              event.full_crm_task.associations[0]
            ) {
              let contactAssociation = event.full_crm_task.associations.find(
                e => e.association_type === 'contact'
              );
              // If is used to fool the ts
              if (
                contactAssociation &&
                contactAssociation.association_type === 'contact'
              ) {
                eventObj.full_name =
                  contactAssociation.contact &&
                  contactAssociation.contact.display_name;
              }
            }
            return eventObj;
          })
      };
    });
};
