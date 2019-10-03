import { async, TestBed } from '@angular/core/testing';
import { ContactsFeatureListingModule } from './contacts-feature-listing.module';

describe('ContactsFeatureListingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContactsFeatureListingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ContactsFeatureListingModule).toBeDefined();
  });
});
