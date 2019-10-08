import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonMaterialModule } from '@contacts/common/material';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    CommonMaterialModule,

    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: EditComponent
      }
    ])
  ],
  declarations: [EditComponent]
})
export class ContactsFeatureEditModule {}
