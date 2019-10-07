import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactsDataAccessModule } from '@contacts/contacts/data-access';

@NgModule({
  imports: [
    CommonModule,
    ContactsDataAccessModule,

    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('@contacts/contacts/feature-listing').then(m => m.ContactsFeatureListingModule)
      }
    ])
  ]
})
export class ContactsFeatureShellModule {}
