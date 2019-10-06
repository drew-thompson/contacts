import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as ContactsActions from './contacts.actions';
import * as fromContacts from './contacts.reducer';
import * as ContactsSelectors from './contacts.selectors';

@Injectable()
export class ContactsFacade {
  loaded$ = this.store.pipe(select(ContactsSelectors.getContactsLoaded));
  allContacts$ = this.store.pipe(select(ContactsSelectors.getAllContacts));
  selectedContacts$ = this.store.pipe(select(ContactsSelectors.getSelected));

  constructor(private store: Store<fromContacts.ContactsPartialState>) {}

  loadAll() {
    this.store.dispatch(ContactsActions.loadContacts());
  }
}
