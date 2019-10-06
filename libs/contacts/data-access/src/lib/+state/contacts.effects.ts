import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import * as ContactsActions from './contacts.actions';
import { ContactsPartialState } from './contacts.reducer';

@Injectable()
export class ContactsEffects {
  loadContacts$ = createEffect(() =>
    this.dataPersistence.fetch(ContactsActions.loadContacts, {
      run: (action: ReturnType<typeof ContactsActions.loadContacts>, state: ContactsPartialState) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        return ContactsActions.loadContactsSuccess({ contacts: [] });
      },

      onError: (action: ReturnType<typeof ContactsActions.loadContacts>, error) => {
        console.error('Error', error);
        return ContactsActions.loadContactsFailure({ error });
      }
    })
  );

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<ContactsPartialState>) {}
}
