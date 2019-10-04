export interface Message {
  message: string;
}

/**
 * A representation of a person's important contact information.
 */
export interface Contact {
  /** A contact's first name. */
  nameFirst?: string;
  /** A contact's last name. */
  nameLast?: string;
  /** A contact's associated email address. */
  email?: string;
  /** Implemented as a string to prevent overflow and allow deeper customization. */
  phone?: string;
  /** A contact's personal, business, or relevant address in paragraph form. */
  address?: string;
  /** Any further information associated with this contact. */
  notes?: string;
}

/**
 * Stronger typing for project environment files.
 */
export interface Environment {
  production: boolean;
  firebase?: object;
  apiOrigin?: string;
  /** Prepended to outgoing API calls.  */
  apiBase?: string;
}
