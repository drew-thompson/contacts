import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonMaterialModule } from '@contacts/common/material';
import { ContactEditGuard } from './contact-edit.guard';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    CommonMaterialModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: EditComponent,
        canDeactivate: [ContactEditGuard]
      }
    ])
  ],
  declarations: [EditComponent]
})
export class ContactsFeatureEditModule {}
