import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonMaterialModule } from '@contacts/common/material';
import { ContactsUiModule } from '@contacts/contacts/ui';
import { ListingComponent } from './listing/listing.component';

@NgModule({
  imports: [
    CommonModule,
    CommonMaterialModule,
    ContactsUiModule,

    RouterModule.forChild([
      {
        path: '',
        component: ListingComponent,
        children: [
          {
            path: ':id',
            loadChildren: () => import('@contacts/contacts/feature-detail').then(m => m.ContactsFeatureDetailModule)
          },
          {
            path: ':id/edit',
            loadChildren: () => import('@contacts/contacts/feature-edit').then(m => m.ContactsFeatureEditModule)
          }
        ]
      }
    ])
  ],
  declarations: [ListingComponent]
})
export class ContactsFeatureListingModule {}
