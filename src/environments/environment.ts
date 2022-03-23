// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAjsiNVvc4p10QRO-IrwORC5G-mRZb4cKQ",
    authDomain: "campgame-app.firebaseapp.com",
    databaseURL: "https://campgame-app.firebaseio.com",
    projectId: "campgame-app",
    storageBucket: "campgame-app.appspot.com",
    messagingSenderId: "589181945652",
    appId: "1:589181945652:web:8cc2b5661a1e864d000761"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// TODO: Add SDKs for Firebase products that you want to use
