import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as ContactsActions from './contacts.actions';
import { ContactsEntity } from './contacts.models';
import * as fromContacts from './contacts.reducer';
import * as ContactsSelectors from './contacts.selectors';

@Injectable()
export class ContactsFacade {
  loaded$ = this.store.pipe(select(ContactsSelectors.getContactsLoaded));
  allContacts$ = this.store.pipe(select(ContactsSelectors.getAllContacts));
  /** All contacts sorted and separated into alphabetical groups. */
  allContactsGroups$ = this.store.pipe(select(ContactsSelectors.getAllContactsGroups));
  selectedContact$ = this.store.pipe(select(ContactsSelectors.getSelected));
  selectedId$ = this.store.pipe(select(ContactsSelectors.getSelectedId));

  constructor(private store: Store<fromContacts.ContactsPartialState>) {}

  loadAll() {
    this.store.dispatch(ContactsActions.loadContacts());
  }

  select(selectedId: string): void {
    this.store.dispatch(ContactsActions.selectContact({ selectedId }));
  }

  deselect(): void {
    this.store.dispatch(ContactsActions.deselectContact());
  }

  saveCurrent(contact: ContactsEntity): void {
    this.store.dispatch(ContactsActions.saveContact({ contact }));
  }
}
