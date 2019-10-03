import { async, TestBed } from '@angular/core/testing';
import { CommonMaterialModule } from '@contacts/common/material';
import { ContactsFeatureListingModule } from './contacts-feature-listing.module';

describe('ContactsFeatureListingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContactsFeatureListingModule, CommonMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ContactsFeatureListingModule).toBeDefined();
  });
});
