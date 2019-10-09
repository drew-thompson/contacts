import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ContactsFacade } from '../lib/+state/contacts.facade';
import { ContactsEntity } from '../lib/+state/contacts.models';

/**
 * Resolves contact data, from the store, for a route before it is shown.
 */
@Injectable()
export class ContactResolver implements Resolve<ContactsEntity> {
  constructor(private contactsFacade: ContactsFacade) {}

  resolve(): Observable<ContactsEntity> {
    return this.contactsFacade.selectedContact$.pipe(take(1));
  }
}
