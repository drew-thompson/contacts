import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacts-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
