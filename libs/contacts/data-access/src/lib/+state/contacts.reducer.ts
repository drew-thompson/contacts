import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as ContactsActions from './contacts.actions';
import { ContactsEntity } from './contacts.models';

export const CONTACTS_FEATURE_KEY = 'contacts';

export interface ContactsState extends EntityState<ContactsEntity> {
  selectedId?: string | number; // which Contacts record has been selected
  loaded: boolean; // has the Contacts list been loaded
  error?: string | null; // last none error (if any)
}

export interface ContactsPartialState {
  readonly [CONTACTS_FEATURE_KEY]: ContactsState;
}

export const contactsAdapter: EntityAdapter<ContactsEntity> = createEntityAdapter<ContactsEntity>();

export const initialState: ContactsState = contactsAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const contactsReducer = createReducer(
  initialState,
  on(ContactsActions.loadContacts, state => ({ ...state, loaded: false, error: null })),
  on(ContactsActions.loadContactsSuccess, (state, { contacts }) =>
    contactsAdapter.addAll(contacts, { ...state, loaded: true })
  ),
  on(ContactsActions.loadContactsFailure, (state, { error }) => ({ ...state, error })),
  on(ContactsActions.selectContact, (state, { selectedId }) => ({ ...state, selectedId })),
  on(ContactsActions.deselectContact, state => ({ ...state, selectedId: undefined }))
);

export function reducer(state: ContactsState | undefined, action: Action) {
  return contactsReducer(state, action);
}
