import { ApplicationRef, Component } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Message } from '@contacts/api-interface';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'contacts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$: Observable<Message>;

  constructor(private appRef: ApplicationRef, private fns: AngularFireFunctions) {
    // Prevent app from becoming unstable by delaying Firebase functions call
    this.appRef.isStable.pipe(first(stable => stable)).subscribe(() => console.log('App is stable now'));
  }
}
