import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Contact } from '@contacts/api-interface';

@Component({
  selector: 'contacts-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordComponent {
  /** The contact this record represents.  */
  @Input() contact: Contact;
  /** Whether this record is being edited. */
  @Input() isEditing: boolean;
}
