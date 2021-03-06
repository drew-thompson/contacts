import { Injectable } from '@angular/core';
import { getHash } from '@contacts/common/utils';
import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import { ContactsService } from '../contacts.service';
import * as ContactsActions from './contacts.actions';
import { ContactsPartialState } from './contacts.reducer';

@Injectable()
export class ContactsEffects {
  loadContacts$ = createEffect(() =>
    this.dataPersistence.fetch(ContactsActions.loadContacts, {
      run: (action: ReturnType<typeof ContactsActions.loadContacts>, state: ContactsPartialState) => {
        return this.contactsService.getContacts().pipe(
          map(contacts => {
            if (!contacts) {
              throw new Error('Contacts could not be loaded.');
            }
            return ContactsActions.loadContactsSuccess({
              contacts: contacts.map((c, id) => ({ ...c, id: getHash(JSON.stringify({ ...c, id })).replace('-', '') }))
            });
          })
        );
      },

      onError: (action: ReturnType<typeof ContactsActions.loadContacts>, error) => {
        console.error('Error', error);
        return ContactsActions.loadContactsFailure({ error });
      }
    })
  );

  saveContact$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(ContactsActions.saveContact, {
      run: (action: ReturnType<typeof ContactsActions.saveContact>, state: ContactsPartialState) => {
        return this.contactsService.saveContact(action.contact).pipe(
          map(res => {
            console.log(res);
            if (!res) {
              throw new Error('Contact could not be updated.');
            }
            const { id } = action.contact;
            return ContactsActions.saveContactSuccess({ update: { id, changes: res.data } });
          })
        );
      },

      onError: (action: ReturnType<typeof ContactsActions.saveContact>, error) => {
        console.error('Error', error);
        return ContactsActions.loadContactsFailure({ error });
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ContactsPartialState>,
    private contactsService: ContactsService
  ) {}
}
