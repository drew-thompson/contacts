import { Contact, Message } from '@contacts/api-interface';
import { Injectable } from '@nestjs/common';

const mockTacts: Contact[] = [
  {
    address: '99 Weiland Way<br/>Cupertino CA 95014<br/>UnitedStates',
    email: 'adam.acer@gmail.com',
    nameFirst: 'Adam',
    nameLast: 'Acer',
    notes: "Adam's California Address",
    phone: '3996927753'
  },
  {
    address: '99 Weiland Way<br/>Cupertino CA 95014<br/>UnitedStates',
    email: 'bob@saget.com',
    nameFirst: 'Bob',
    nameLast: 'Saget',
    notes: "Can't tell if he's a nice guy",
    phone: '1238675309'
  },
  {
    address: '',
    email: '',
    nameFirst: 'Someone',
    nameLast: 'Cool',
    notes: '',
    phone: ''
  },
  {
    address: '',
    email: '',
    nameFirst: 'Cat',
    nameLast: '',
    notes: '',
    phone: ''
  },
  {
    address: '',
    email: '',
    nameFirst: 'Clementine',
    nameLast: 'Cat',
    notes: '',
    phone: ''
  },
  {
    address: '',
    email: '',
    nameFirst: 'Leon',
    nameLast: 'Merrigold',
    notes: '',
    phone: ''
  },
  {
    address: '',
    email: '',
    nameFirst: 'Jasmine',
    nameLast: 'Pringle',
    notes: '',
    phone: ''
  },
  {
    address: '',
    email: '',
    nameFirst: 'Michael',
    nameLast: 'Scott',
    notes: '',
    phone: ''
  }
];

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getContacts(): Contact[] {
    return mockTacts;
  }
}
