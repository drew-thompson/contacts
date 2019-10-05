import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonMaterialModule } from '@contacts/common/material';
import { RecordComponent } from './record.component';
import { Contact } from '@contacts/api-interface';

describe('RecordComponent', () => {
  let component: RecordComponent;
  let fixture: ComponentFixture<RecordComponent>;
  let validContact: Contact;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonMaterialModule],
      declarations: [RecordComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordComponent);
    validContact = {
      address: '99 Weiland Way<br/>Cupertino CA 95014<br/>UnitedStates',
      email: 'bob@saget.com',
      nameFirst: 'Bob',
      nameLast: 'Saget',
      notes: "Can't tell if he's a nice guy",
      phone: '1238675309'
    };
    component = fixture.componentInstance;
    component.contact = validContact;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
