import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '@contacts/api-interface';
import { ContactsFacade } from '@contacts/contacts/data-access';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'contacts-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;
  /** Whether the user is viewing the contacts listing. */
  isViewingListing = true;
  /** Whether the user is viewing a selected contact. */
  isViewingContact = false;
  /** Whether the user is editing the selected contact. */
  isEditing = false;
  /** Index of the selected contact. */
  selectedIndex: number;

  constructor(private router: Router, private route: ActivatedRoute, public contactsFacade: ContactsFacade) {}

  ngOnInit() {
    this.contactsFacade.loadAll();
  }

  ngAfterViewInit() {
    const child = this.route.firstChild;
    if (child) {
      // Initialize selected index on direct navigation
      child.paramMap.pipe(first()).subscribe(paramMap => {
        const id = paramMap.get('id');
        if (id !== null) {
          this.selectedIndex = parseInt(id, 10) - 1;
        }
      });
    }
  }

  onActivate(event: any): void {
    console.log(event);
    this.isViewingContact = true;
  }

  onDeactivate(event: any): void {
    console.log(event);
    this.isViewingContact = false;
  }

  onContactSelected(index: number): void {
    this.selectedIndex = index;
    this.navigateToDetail(index);
  }

  /**
   * Toggle whether the user is editing a contact.
   *
   * @description
   * Will only set `isEditing` to `true` if a contact is currently selected.
   */
  toggleEditing(): void {
    if (this.hasContactSelected() && !this.isEditing) {
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

  hasContactSelected(): boolean {
    return this.selectedIndex !== undefined;
  }

  navigateToDetail(index: number): void {
    this.router.navigate(['contacts', index + 1]);
  }
}
