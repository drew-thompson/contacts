import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, Contact } from '@contacts/api-interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContactsEntity } from './+state/contacts.models';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<ApiResponse<Contact[]>>('api/contacts').pipe(map(res => res.data));
  }

  saveContact(contact: ContactsEntity): Observable<ApiResponse<ContactsEntity>> {
    return this.http.post<ApiResponse<ContactsEntity>>('api/contact', contact);
  }
}
