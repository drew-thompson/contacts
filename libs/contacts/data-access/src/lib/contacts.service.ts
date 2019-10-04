import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '@contacts/api-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('api/contacts');
  }
}
