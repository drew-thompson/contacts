import { async, TestBed } from '@angular/core/testing';
import { CommonMaterialModule } from '@contacts/common/material';
import { ContactsUiModule } from './contacts-ui.module';

describe('ContactsUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContactsUiModule, CommonMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ContactsUiModule).toBeDefined();
  });
});
