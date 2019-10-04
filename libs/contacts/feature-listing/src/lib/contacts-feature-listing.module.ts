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
        pathMatch: 'full',
        component: ListingComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('@contacts/contacts/feature-detail').then(m => m.ContactsFeatureDetailModule)
          }
        ]
      }
    ])
  ],
  declarations: [ListingComponent]
})
export class ContactsFeatureListingModule {}
