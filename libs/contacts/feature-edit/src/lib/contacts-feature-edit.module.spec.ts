import { async, TestBed } from '@angular/core/testing';
import { ContactsFeatureEditModule } from './contacts-feature-edit.module';

describe('ContactsFeatureEditModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContactsFeatureEditModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ContactsFeatureEditModule).toBeDefined();
  });
});
