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
  public server='http://localhost:47288';
  //public server ='http://lb-12-p1-311925443.us-east-2.elb.amazonaws.com';
  public collapsed=false;
  public currentUser:any;
  //public linkBucket='https://archivos-12-p1.s3.us-east-2.amazonaws.com/';

  //public arraytransferences=[];

  public currentf:any;
  public currprod:any;
  public arrayfacts=[];
  
  constructor(private http: HttpClient,) { 
    //this._dataStream$.subscribe((data) => this._onEvent(data));
  }



  getSaldoCurrentUser():any{
    let data={
      //numcuenta:this.getCurrentUser().numcuenta
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
        //this.setCurrentUser(dataactual);
        
      }
    ).catch((fromRej) => {
      console.log(fromRej)
      //this.toastr.error('Error al intentar logearse', 'Error!');
    }
    );      
    
    //return localStorage.getItem('user');
  }
  getFacturas()
  {
    console.log('Enviando get allfacturas');
    new Promise(async(resolve,reject)=>{
      try{
        this.http.get<any>(this.server+'/api/factura').subscribe(data => {
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    }).then(
      (fromRes:any) => {
        this.arrayfacts=fromRes;
        console.log(fromRes);
        //let dataactual=JSON.parse(localStorage.getItem('user') || ('false'))
        //dataactual.saldo=fromRes.saldo;
        //this.setCurrentUser(dataactual);
        
      }
    ).catch((fromRej) => {
      console.log(fromRej)
      //this.toastr.error('Error al intentar logearse', 'Error!');
    }
    );      
  }    
  verFactura(correlativo:any){
    new Promise(async(resolve,reject)=>{
      try{
        this.http.get<any>(this.server+'/api/factura/'+correlativo).subscribe(data => {
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    }).then(
      (fromRes:any) => {
        console.log(fromRes);
        this.currentf=fromRes;        
      }
    ).catch((fromRej) => {
      console.log(fromRej)
    }
    );   
  }  
  modificarFactura(correlativo:any){

  }    
  eliminarrFactura(correlativo:any){
    new Promise(async(resolve,reject)=>{
      try{
        this.http.delete<any>(this.server+'/api/factura/'+correlativo).subscribe(data => {
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    }).then(
      (fromRes:any) => {
        console.log(fromRes);
        this.getFacturas();
      }
    ).catch((fromRej) => {
      console.log('Error');
      console.log(fromRej)
    }
    );   
  }     
  
  addFactura(nit:any,nombre:any,fecha:any){
    let data={
      nit:nit,
      nombre:nombre,
      fecha:fecha
    }
    new Promise(async(resolve,reject)=>{
      try{
        this.http.post<any>(this.server+'/api/factura',data).subscribe(data => {
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    }).then(
      (fromRes:any) => {
        console.log('Creando factura');
        console.log(fromRes);
        //this.getFacturas();
      }
    ).catch((fromRej) => {
      console.log('Error');
      console.log(fromRej)
    }
    );
  }
  _onEvent(data: any) {    
  }  
  subscribe(event: string, callback: Function) {
  }



  
}
