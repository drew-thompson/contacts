import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonMaterialModule } from '@contacts/common/material';
import { RecordComponent } from './record/record.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';

@NgModule({
  imports: [CommonModule, CommonMaterialModule],
  declarations: [RecordComponent, SubHeaderComponent],
  exports: [RecordComponent, SubHeaderComponent]
})
export class ContactsUiModule {}
