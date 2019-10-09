import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonMaterialModule } from '@contacts/common/material';
import { ContactResolver } from '@contacts/contacts/data-access';
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
            path: 'create',
            data: { creating: true },
            loadChildren: () => import('@contacts/contacts/feature-edit').then(m => m.ContactsFeatureEditModule)
          },
          {
            path: ':id',
            loadChildren: () => import('@contacts/contacts/feature-detail').then(m => m.ContactsFeatureDetailModule)
          },
          {
            path: ':id/edit',
            data: { creating: false },
            resolve: { contact: ContactResolver },
            loadChildren: () => import('@contacts/contacts/feature-edit').then(m => m.ContactsFeatureEditModule)
          }
        ]
      }
    ])
  ],
  declarations: [ListingComponent]
})
export class ContactsFeatureListingModule {}
