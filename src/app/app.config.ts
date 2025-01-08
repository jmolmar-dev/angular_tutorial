import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"angular-tutorial-jmm","appId":"1:135414048788:web:c366079200a863befd5f01","databaseURL":"https://angular-tutorial-jmm-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"angular-tutorial-jmm.firebasestorage.app","apiKey":"AIzaSyDsUuuSiTQ2jdtX6c3cx-mtdQ3KnviO41M","authDomain":"angular-tutorial-jmm.firebaseapp.com","messagingSenderId":"135414048788"})), provideAuth(() => getAuth()), provideDatabase(() => getDatabase())] 
};
