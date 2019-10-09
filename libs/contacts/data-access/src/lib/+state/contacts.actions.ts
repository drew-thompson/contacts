import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { ContactsEntity } from './contacts.models';

export const loadContacts = createAction('[Contacts] Load Contacts');

export const loadContactsSuccess = createAction(
  '[Contacts] Load Contacts Success',
  props<{ contacts: ContactsEntity[] }>()
);

export const loadContactsFailure = createAction('[Contacts] Load Contacts Failure', props<{ error: any }>());

export const selectContact = createAction('[Contacts] Select Contact', props<{ selectedId: string }>());

export const deselectContact = createAction('[Contacts] Deselect Contact');

export const saveContact = createAction('[Contacts] Save Contact', props<{ contact: ContactsEntity }>());

export const saveContactSuccess = createAction(
  '[Contacts] Save Contact Success',
  props<{ update: Update<ContactsEntity> }>()
);

export const saveContactFailure = createAction('[Contacts] Save Contact Failure', props<{ error: any }>());
