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
  /** Whether the user is editing the selected contact. */
  isEditing = false;
  /** Index of the selected contact. */
  selectedIndex: number;

  contacts$: Observable<Contact[]>;
  mockTacts: Contact[] = [
    {
      address: '99 Weiland Way<br/>Cupertino CA 95014<br/>UnitedStates',
      email: 'adam.acer@gmail.com',
      nameFirst: 'Adam',
      nameLast: 'Acer',
      notes: "Adam's California Address",
      phone: '3996927753'
    },
    {
      address: '99 Weiland Way<br/>Cupertino CA 95014<br/>UnitedStates',
      email: 'bob@saget.com',
      nameFirst: 'Bob',
      nameLast: 'Saget',
      notes: "Can't tell if he's a nice guy",
      phone: '1238675309'
    }
  ];

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts$ = this.contactsService.getContacts();
  }

  /**
   * Toggle whether the user is editing a contact.
   *
   * @description
   * Will only set `isEditing` to `true` if a contact is currently selected.
   */
  toggleEditing(): void {
    if (this.selectedIndex !== undefined && !this.isEditing) {
      this.isEditing = true;
    } else {
      this.isEditing = false;
    }
  }

  /**
   * Toggle the sidenav panel, which houses the listing of records, opened or closed.
   */
  toggleSidenav(): void {
    this.sidenav.toggle();
    this.isViewingListing = this.sidenav.opened;
  }
}
