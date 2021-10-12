import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
import { HttpClient } from '@angular/common/http';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  //private _data = new Subject<Object>();
  //private _dataStream$ = this._data.asObservable();
//
  public server='http://34.121.124.156:8000';
  //public server ='http://lb-12-p1-311925443.us-east-2.elb.amazonaws.com';
  public collapsed=false;
  public currentUser:any;
  //public linkBucket='https://archivos-12-p1.s3.us-east-2.amazonaws.com/';

  public arraytransferences=[];
  constructor(private http: HttpClient,) { 
    //this._dataStream$.subscribe((data) => this._onEvent(data));
  }

  setCurrentUser(user:any){
    localStorage.setItem('user', JSON.stringify(user));
  }
  getCurrentUser():any{
    return JSON.parse(localStorage.getItem('user') || ('false'));
    //return localStorage.getItem('user');
  }


  getSaldoCurrentUser():any{
    let data={
      numcuenta:this.getCurrentUser().numcuenta
    }
    new Promise(async(resolve,reject)=>{
      try{
        this.http.post<any>(this.server+'/getsaldo',data).subscribe(data => {
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    }).then(
      (fromRes:any) => {
        console.log(fromRes)
        let dataactual=JSON.parse(localStorage.getItem('user') || ('false'))
        dataactual.saldo=fromRes.saldo;
        this.setCurrentUser(dataactual);
        
      }
    ).catch((fromRej) => {
      console.log(fromRej)
      //this.toastr.error('Error al intentar logearse', 'Error!');
    }
    );      
    
    //return localStorage.getItem('user');
  }
  
  makeTransaction(values:any):any{
    return new Promise(async(resolve,reject)=>{
      try{
        this.http.put<any>(this.server+'/saldo',values).subscribe(data => {
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    })
  }

  getReporte():any{
    let data={
      numcuenta:this.getCurrentUser().numcuenta
    }
    new Promise(async(resolve,reject)=>{
      try{
        this.http.post<any>(this.server+'/reporte',data).subscribe(data => {
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    }).then(
      (fromRes:any) => {
        
        this.arraytransferences=fromRes;        
        let body:any=[];
        this.arraytransferences.forEach(function (element:any) {
          body.push([element.cuentaorigen,element.cuentadestino,element.cantidad])
        });
        const doc = new jsPDF()
        autoTable(doc,{
          head: [['Cuenta Origen', 'Cuenta Destino', 'Monto']],
          body:body
        })
        doc.save('Test.pdf');


      }
    ).catch((fromRej) => {
      console.log(fromRej)
    }
    );          

  }  
  
  _onEvent(data: any) {    
  }  
  subscribe(event: string, callback: Function) {
  }



  
}
