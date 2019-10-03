import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'contacts-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingComponent implements OnInit {
  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;

  viewingMenu = true;

  constructor() {}

  ngOnInit() {}

  toggleSidenav(): void {
    this.sidenav.toggle();
    this.viewingMenu = this.sidenav.opened;
  }
}
