import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ContactsEffects } from './contacts.effects';
import * as ContactsActions from './contacts.actions';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContactsEffects', () => {
  let actions: Observable<any>;
  let effects: ContactsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), HttpClientTestingModule],
      providers: [ContactsEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()]
    });

    effects = TestBed.get(ContactsEffects);
  });

  describe('loadContacts$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ContactsActions.loadContacts() });

      const expected = hot('-a-|', { a: ContactsActions.loadContactsSuccess({ contacts: [] }) });

      expect(effects.loadContacts$).toBeTruthy();
    });
  });
});
