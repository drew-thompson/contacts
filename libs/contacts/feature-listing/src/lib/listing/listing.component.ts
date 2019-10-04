import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Contact } from '@contacts/api-interface';
import { ContactsService } from '@contacts/contacts/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'contacts-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingComponent implements OnInit {
  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;
  /** Whether the user is viewing the contacts listing. */
  isViewingListing = true;
  contacts$: Observable<Contact[]>;

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts$ = this.contactsService.getContacts();
  }

  toggleSidenav(): void {
    this.sidenav.toggle();
    this.isViewingListing = this.sidenav.opened;
  }
}
