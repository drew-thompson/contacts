import { Contact } from '@contacts/api-interface';

/**
 * Interface for the 'Contacts' data
 */
export interface ContactsEntity extends Contact {
  id: string; // Primary ID
}
