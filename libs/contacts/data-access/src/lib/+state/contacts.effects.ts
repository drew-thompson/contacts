import { Injectable } from '@angular/core';
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
        // Your custom service 'load' logic goes here. For now just return a success action...
        return this.contactsService.getContacts().pipe(
          map(contacts => {
            if (!contacts) {
              throw new Error('Contacts could not be loaded.');
            }
            return ContactsActions.loadContactsSuccess({
              contacts: contacts.map((c, i) => ({ ...c, id: i + 1 }))
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

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ContactsPartialState>,
    private contactsService: ContactsService
  ) {}
}
