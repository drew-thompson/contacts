import { AfterViewInit, ChangeDetectionStrategy, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceEvent } from '@contacts/common/utils';
import { ContactsEntity, ContactsFacade } from '@contacts/contacts/data-access';
import { RouterFacade } from '@contacts/router/data-access';
import { Observable, Subscription } from 'rxjs';

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
  /** Index of the selected contact. */
  selectedId: string | number;

  /** Whether the user is editing a contact. */
  isEditing$: Observable<boolean>;

  private childRouteSubscription: Subscription;
  private readonly breakpoint = 600;
  private lastWidth = window.innerWidth;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private routerFacade: RouterFacade,
    public contactsFacade: ContactsFacade
  ) {}

  ngOnInit() {
    this.contactsFacade.loadAll();
    this.isEditing$ = this.routerFacade.urlHasSegment('edit');
  }

  ngAfterViewInit() {}

  onActivate(_event: any): void {
    this.handleRouteChanges();
    this.isViewingContact = true;
  }

  onDeactivate(_event: any): void {
    this.contactsFacade.deselect();
    this.selectedId = undefined;
    this.isViewingContact = false;
  }

  onContactSelected(contact: ContactsEntity): void {
    this.navigateToDetail(contact.id);
  }

  @HostListener('window:resize')
  @debounceEvent(100)
  onWindowResize(): void {
    const width = window.innerWidth;
    const isShrinking = window.innerWidth < this.lastWidth;
    const shouldClose = this.isViewingContact && this.isViewingListing && width < this.breakpoint;
    const shouldOpen =
      !this.sidenav.opened && (this.isViewingContact || this.isViewingListing) && width > this.breakpoint;

    if ((isShrinking && shouldClose) || (!isShrinking && shouldOpen)) {
      this.toggleSidenav();
    }

    this.lastWidth = width;
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
