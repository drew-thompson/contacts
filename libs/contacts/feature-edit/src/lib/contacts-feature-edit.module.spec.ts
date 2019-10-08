import { async, TestBed } from '@angular/core/testing';
import { CommonMaterialModule } from '@contacts/common/material';
import { ContactsFeatureEditModule } from './contacts-feature-edit.module';

describe('ContactsFeatureEditModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContactsFeatureEditModule, CommonMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ContactsFeatureEditModule).toBeDefined();
  });
});
