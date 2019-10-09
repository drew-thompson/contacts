import { async, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonMaterialModule } from '@contacts/common/material';
import { ContactsUiModule } from '@contacts/contacts/ui';
import { ContactsFeatureListingModule } from './contacts-feature-listing.module';

describe('ContactsFeatureListingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContactsFeatureListingModule, CommonMaterialModule, ContactsUiModule, FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ContactsFeatureListingModule).toBeDefined();
  });
});
