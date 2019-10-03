import { async, TestBed } from '@angular/core/testing';
import { ContactsDataAccessModule } from './contacts-data-access.module';

describe('ContactsDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContactsDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ContactsDataAccessModule).toBeDefined();
  });
});
