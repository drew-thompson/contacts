import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('@contacts/contacts/feature-listing').then(m => m.ContactsFeatureListingModule)
      }
    ])
  ]
})
export class ContactsFeatureShellModule {}
