import { AfterViewInit, ChangeDetectionStrategy, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceEvent } from '@contacts/common/utils';
import { ContactsEntity, ContactsFacade } from '@contacts/contacts/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'contacts-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  selectedId: string | number;

  private childRouteSubscription: Subscription;
  private readonly breakpoint = 600;

  constructor(private router: Router, private route: ActivatedRoute, public contactsFacade: ContactsFacade) {}

  ngOnInit() {
    this.contactsFacade.loadAll();
  }

  ngAfterViewInit() {}

  onActivate(_event: any): void {
    this.handleRouteChanges();
    this.isViewingContact = true;
  }

  onDeactivate(_event: any): void {
    this.contactsFacade.deselect();
    this.isViewingContact = false;
  }

  onContactSelected(contact: ContactsEntity): void {
    this.navigateToDetail(contact.id);
  }

  @HostListener('window:resize')
  @debounceEvent()
  onWindowResize(): void {
    const width = window.innerWidth;
    const shouldClose = this.isViewingContact && this.isViewingListing && width < this.breakpoint;
    if (shouldClose) {
      this.toggleSidenav();
    }
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
    return this.selectedId !== undefined;
  }

  isSelected(record: ContactsEntity): boolean {
    return record.id === this.selectedId;
  }

  getSubheader(group: ContactsEntity[]): string {
    const firstContact = group[0];
    if (firstContact.nameLast.length) {
      return firstContact.nameLast[0];
    }
    return firstContact.nameFirst[0];
  }

  navigateToDetail(id: string | number): void {
    this.router.navigate(['contacts', id]);
  }

  private handleRouteChanges(): void {
    const child = this.route.firstChild;
    if (this.childRouteSubscription) {
      this.childRouteSubscription.unsubscribe();
    }

    if (child) {
      this.childRouteSubscription = child.paramMap.subscribe(paramMap => {
        const id = paramMap.get('id');
        if (id !== null) {
          this.contactsFacade.select(id);
          this.selectedId = id;
          const shouldOpen = this.isViewingListing && window.innerWidth < this.breakpoint;
          if (shouldOpen) {
            this.toggleSidenav();
          }
        }
      });
    }
  }
}
