import { ContactsEntity } from './contacts.models';
import * as ContactsActions from './contacts.actions';
import { ContactsState, initialState, reducer } from './contacts.reducer';

describe('Contacts Reducer', () => {
  const createContactsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as ContactsEntity);

  beforeEach(() => {});

  describe('valid Contacts actions', () => {
    it('loadContactsSuccess should return set the list of known Contacts', () => {
      const contacts = [createContactsEntity('PRODUCT-AAA'), createContactsEntity('PRODUCT-zzz')];
      const action = ContactsActions.loadContactsSuccess({ contacts });

      const result: ContactsState = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
