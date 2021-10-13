import { Injectable } from '@angular/core';
//import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || ('false'));

  setLoginStatus(value:any) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  get LoginStatus() {
    return JSON.parse(localStorage.getItem('loggedIn') || 
    this.loggedInStatus.toString());
  }

  sinUpUser(email: string, password: string) {
    //return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  logInUser(user_email: string, password: string) {
    this.setLoginStatus(true);
    //return firebase.auth().signInWithEmailAndPassword(email, password);
  }
}
