import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ContactsEffects } from './+state/contacts.effects';
import { ContactsFacade } from './+state/contacts.facade';
import * as fromContacts from './+state/contacts.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromContacts.CONTACTS_FEATURE_KEY, fromContacts.reducer),
    EffectsModule.forFeature([ContactsEffects])
  ],
  providers: [ContactsFacade]
})
export class ContactsDataAccessModule {}
