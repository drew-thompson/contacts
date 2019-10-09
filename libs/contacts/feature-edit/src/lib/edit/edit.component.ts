import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerComponent } from '@contacts/common/utils';
import { ContactsEntity, ContactsFacade, saveContactFailure, saveContactSuccess } from '@contacts/contacts/data-access';
import { Actions } from '@ngrx/effects';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'contacts-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent extends ContainerComponent implements OnInit, AfterViewInit {
  /** All labels that need their widths to be normalized. */
  @ViewChildren('label') labels: QueryList<ElementRef<HTMLLabelElement>>;
  /** Form that stores a user's temporary edits. */
  form: FormGroup;
  /**
   * Whether the user has successfully saved changes to the BE.
   * Used to prevent the deactivation guard for this component from alerting users of unsaved changes after they have saved.
   */
  hasSaved = false;

  contact: ContactsEntity;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private contactsFacade: ContactsFacade,
    protected actions: Actions
  ) {
    super(actions);
  }

  ngOnInit() {
    this.form = this.createForm();

    this.route.data.subscribe((data: { creating: boolean; contact?: ContactsEntity }) =>
      this.patchContact(data.contact)
    );
  }

  ngAfterViewInit() {
    this.normalizeLabelWidths();
  }

  onSubmit(): void {
    const form = this.form.value;
    this.form.disable();

    const contact = { ...this.contact, ...form };
    this.onAction(saveContactSuccess).subscribe(a => this.onSuccess(a));
    this.onAction(saveContactFailure).subscribe(a => this.onError(a));
    this.contactsFacade.saveCurrent(contact);
  }

  private createForm(): FormGroup {
    return this.fb.group({
      nameFirst: '',
      nameLast: '',
      email: ['', Validators.email],
      phone: '',
      address: '',
      notes: ''
    });
  }

  private patchContact(contact: ContactsEntity) {
    if (contact) {
      this.setContact(contact);
    } else {
      this.contactsFacade.selectedContact$
        .pipe(
          filter(c => !!c),
          take(1)
        )
        .subscribe(c => this.setContact(c));
    }
  }

  private setContact(contact: ContactsEntity): void {
    this.contact = contact;
    this.form.patchValue({ ...contact });
  }

  private normalizeLabelWidths(): void {
    const labels = this.labels
      .toArray()
      .map(ref => ref.nativeElement)
      .sort((a, b) => {
        if (a.clientWidth > b.clientWidth) return -1;
        if (a.clientWidth < b.clientWidth) return 1;
        return 0;
      });
    const width = labels[0].clientWidth;
    labels.forEach(label => (label.style.minWidth = `${width}px`));
  }

  private onSuccess(action): void {
    console.log(action);
    this.hasSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private onError(action: any): void {
    this.form.enable();
    alert(action.type);
  }
}
