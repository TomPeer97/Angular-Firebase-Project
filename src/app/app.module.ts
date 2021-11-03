import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { CustomersTableIcons } from './components/customers-table-icons.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AddEditDisplayCustomerComponent } from './components/customer-page/add-edit-display-customer/add-edit-display-customer.component';
import { RouterModule } from '@angular/router';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";
import {AngularFireAuthGuardModule} from "@angular/fire/compat/auth-guard";
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WeatherComponent } from './components/weather/weather.component';
import {MatIconModule} from '@angular/material/icon';


const firebaseConfig = {
  apiKey: "AIzaSyAR3VIO9Z7y-j83yAvwwPC7hOBwuZ8Qqg4",
  authDomain: "customersapp-8fc6d.firebaseapp.com",
  databaseURL: "https://customersapp-8fc6d-default-rtdb.firebaseio.com",
  projectId: "customersapp-8fc6d",
  storageBucket: "customersapp-8fc6d.appspot.com",
  messagingSenderId: "26004472909",
  appId: "1:26004472909:web:1e5790195701e5b9864804",
  measurementId: "G-WKSLMLR54Z"
};


@NgModule({
  imports: [
    AngularFireAuthGuardModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MatIconModule,
    RouterModule.forRoot([
      {
        path: 'customers',
        component: CustomerPageComponent,
        canActivate: [AngularFireAuthGuard]
      },

      {
        path: 'contacts',
        component: ContactsPageComponent,
        canActivate: [AngularFireAuthGuard]
      },


      {
        path: 'login',
        component: LoginPageComponent
      },
       {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AngularFireAuthGuard] // allows in this page only if passes the guard
      },

      {
        path: '**',// 404 Page
        component: PageNotFoundComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    CustomersTableIcons,
    CustomerPageComponent,
    AddEditDisplayCustomerComponent,
    ContactsPageComponent,
    LoginPageComponent,
    ProfileComponent,
     WeatherComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
