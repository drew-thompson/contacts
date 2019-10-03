import { async, TestBed } from '@angular/core/testing';
import { ContactsFeatureDetailModule } from './contacts-feature-detail.module';

describe('ContactsFeatureDetailModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContactsFeatureDetailModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ContactsFeatureDetailModule).toBeDefined();
  });
});
