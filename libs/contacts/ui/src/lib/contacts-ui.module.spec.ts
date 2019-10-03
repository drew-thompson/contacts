import { async, TestBed } from '@angular/core/testing';
import { ContactsUiModule } from './contacts-ui.module';

describe('ContactsUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContactsUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ContactsUiModule).toBeDefined();
  });
});
