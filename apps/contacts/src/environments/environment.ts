// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAI-uFE5Gcij9cNdidWbHA1m9Vzdrkmx-Q',
    authDomain: 'h2o-challenge.firebaseapp.com',
    databaseURL: 'https://h2o-challenge.firebaseio.com',
    projectId: 'h2o-challenge',
    storageBucket: 'h2o-challenge.appspot.com',
    messagingSenderId: '668628369193',
    appId: '1:668628369193:web:a1c60a03adcb94d332c138',
    measurementId: 'G-GB08SN9BFR'
  },
  apiOrigin: 'http://localhost:3333',
  apiBase: ''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
