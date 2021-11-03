import { Component, VERSION } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private r: Router, private auth:AngularFireAuth) {
    
    //כאן נכניס קוד שבאופן קבוע מתעדכן בסטטוס שהאם המשתמש בפנים או בחוץ
    
    this.auth.onAuthStateChanged (userDetails => {this.isLoggedIn = !!userDetails})
  }

  logout() {
    //סימולציה של התנתקות
    this.auth.signOut().then(() => {
     this.r.navigate(['login']);
    });
  }

isLoggedIn:boolean = true;

}
 

