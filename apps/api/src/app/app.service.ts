import { Contact, Message } from '@contacts/api-interface';
import { Injectable } from '@nestjs/common';

const mockTacts: Contact[] = [
  {
    address: '99 Weiland Way\nCupertino CA 95014\nUnited States',
    email: 'adam.acer@gmail.com',
    nameFirst: 'Adam',
    nameLast: 'Acer',
    notes: "Adam's California Address",
    phone: '3996927753',
    id: '1288194745'
  },
  {
    address: '99 Weiland Way\nCupertino CA 95014\nUnited States',
    email: 'bob@saget.com',
    nameFirst: 'Bob',
    nameLast: 'Saget',
    notes: "Can't tell if he's a nice guy",
    phone: '1238675309',
    id: '1922253444'
  },
  {
    address: '',
    email: '',
    nameFirst: 'Someone',
    nameLast: 'Cool',
    notes: '',
    phone: '',
    id: ''
  },
  {
    address: '',
    email: '',
    nameFirst: 'Cat',
    nameLast: '',
    notes: '',
    phone: '',
    id: ''
  },
  {
    address: '',
    email: '',
    nameFirst: 'Clementine',
    nameLast: 'Cat',
    notes: '',
    phone: '',
    id: ''
  },
  {
    address: '',
    email: '',
    nameFirst: 'Leon',
    nameLast: 'Merrigold',
    notes: '',
    phone: '',
    id: ''
  },
  {
    address: '',
    email: '',
    nameFirst: 'Jasmine',
    nameLast: 'Pringle',
    notes: '',
    phone: '',
    id: ''
  },
  {
    address: '',
    email: '',
    nameFirst: 'Michael',
    nameLast: 'Scott',
    notes: '',
    phone: '',
    id: ''
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

  updateContact(contact: Contact): Contact {
    const nameLast = contact.nameLast;
    return { ...contact, nameLast: contact.nameFirst, nameFirst: nameLast };
  }
}
