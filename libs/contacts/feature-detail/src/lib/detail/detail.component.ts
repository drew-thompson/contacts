import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactsFacade } from '@contacts/contacts/data-access';

@Component({
  selector: 'contacts-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent {
  constructor(public contactsFacade: ContactsFacade) {}
}
