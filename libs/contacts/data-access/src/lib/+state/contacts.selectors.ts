import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContactsEntity } from './contacts.models';
import { CONTACTS_FEATURE_KEY, contactsAdapter, ContactsPartialState, ContactsState } from './contacts.reducer';

// Lookup the 'Contacts' feature state managed by NgRx
export const getContactsState = createFeatureSelector<ContactsPartialState, ContactsState>(CONTACTS_FEATURE_KEY);

const { selectAll, selectEntities } = contactsAdapter.getSelectors();

export const getContactsLoaded = createSelector(
  getContactsState,
  (state: ContactsState) => state.loaded
);

export const getContactsError = createSelector(
  getContactsState,
  (state: ContactsState) => state.error
);

export const getAllContacts = createSelector(
  getContactsState,
  (state: ContactsState) => selectAll(state)
);

/**
 * All contacts sorted and separated into alphabetical groups.
 */
export const getAllContactsGroups = createSelector(
  getAllContacts,
  contacts => {
    if (!contacts.length) {
      return [];
    }
    const copy = [...contacts];
    const sortedContacts = copy.sort(byLastNameDefaultFirstName);

    const groups: ContactsEntity[][] = [];
    const getDigit = (c: ContactsEntity) => c.nameLast[0] || c.nameFirst[0];

    let group = [sortedContacts.shift()];
    let digit = getDigit(group[0]);

    for (let i = 0; i < sortedContacts.length; i++) {
      const current = sortedContacts[i];
      const currentDigit = getDigit(current);
      if (currentDigit !== digit) {
        groups.push(group);
        group = [];
      }
      digit = currentDigit;
      group.push(current);
    }

    if (group.length) {
      groups.push(group);
    }

    return groups;
  }
);

export const getContactsEntities = createSelector(
  getContactsState,
  (state: ContactsState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getContactsState,
  (state: ContactsState) => state.selectedId
);

export const getSelected = createSelector(
  getContactsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

export const getIsSelectedContact = createSelector(
  getSelectedId,
  (id: string, props: string) => id === props
);

const byLastNameDefaultFirstName = (a: ContactsEntity, b: ContactsEntity) => {
  const aLast = a.nameLast;
  const bLast = b.nameLast;
  const split = (val: string) => val.split(' ');
  const splitA = split(aLast);
  const splitB = split(bLast);
  const lastDigit = (val: string[]) => val[val.length - 1];
  const lastDigitA = lastDigit(splitA);
  const lastDigitB = lastDigit(splitB);

  const aFirst = lastDigit(split(a.nameFirst));
  if (!aLast.length) {
    if (aFirst < lastDigitB) return -1;
    if (aFirst > lastDigitB) return 1;
    return 0;
  }
  const bFirst = lastDigit(split(b.nameFirst));
  if (!bLast.length) {
    if (bFirst < lastDigitA) return -1;
    if (bFirst > lastDigitA) return 1;
    return 0;
  }

  if (lastDigitA < lastDigitB) return -1;
  if (lastDigitA > lastDigitB) return 1;
  return 0;
};
