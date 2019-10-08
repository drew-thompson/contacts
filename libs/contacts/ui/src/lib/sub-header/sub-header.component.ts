import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'contacts-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubHeaderComponent {
  /** Alphabetical group of contacts this sub-header represents. */
  @Input() digit: string;
}
