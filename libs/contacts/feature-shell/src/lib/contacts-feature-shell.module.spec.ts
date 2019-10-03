import { async, TestBed } from '@angular/core/testing';
import { ContactsFeatureShellModule } from './contacts-feature-shell.module';

describe('ContactsFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContactsFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ContactsFeatureShellModule).toBeDefined();
  });
});
