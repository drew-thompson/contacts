import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonMaterialModule } from '@contacts/common/material';
import { RecordComponent } from './record/record.component';

@NgModule({
  imports: [CommonModule, CommonMaterialModule],
  declarations: [RecordComponent],
  exports: [RecordComponent]
})
export class ContactsUiModule {}
