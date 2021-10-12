import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GlobalService} from '../global.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient,
                public global:GlobalService){

    }

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || ('false'));

  setLoginStatus(value:any) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', value);
  }

  get LoginStatus() {
    return JSON.parse(localStorage.getItem('loggedIn') || 
    this.loggedInStatus.toString());
  }

   sinUpUser(newuser:any):Promise<any> {
    //return firebase.auth().createUserWithEmailAndPassword(email, password);

    return new Promise(async(resolve,reject)=>{
      try{
        this.http.post<any>(this.global.server+'/register',newuser).subscribe(data => {
          //console.log(data);
          resolve(data);
        })   
      }catch(err:any){
        console.log(err);
        reject({type:-1,msg:'Error al crear el dato'});
      }
    });

  
  }

  logInUser(user_email: any, password: any):Promise<any> {
    return new Promise(async(resolve,reject)=>{
      try{
        
        this.http.post<any>(this.global.server+'/login',{numcuenta:user_email,password:password}).subscribe(data => {
          resolve(data);
        })
        
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    });    
    
  }
}
