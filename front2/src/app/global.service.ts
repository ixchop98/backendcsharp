import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public productos:any =[];
  public itemscarrito:any=[];
  public arrayfacturas:any=[];
  public currentproduct:any={};
  public currentcarrito:any=[];
  public collapsed=false;
  public server='http://localhost:47288';
  constructor(private http: HttpClient) { 
  }

  generarProductos(){
    let numeroproductos=10+Math.floor(Math.random() * 90);
    for (let n=0;n< numeroproductos;n++){
      let precio=10+Math.floor(Math.random() * 90);
      this.productos.push({
        producto:'Producto'+n,
        precio:precio,
        img:'https://picsum.photos/'+(200+n)
      })
    }
    
  }

  getProdutos(){
    new Promise(async(resolve,reject)=>{
      try{
        this.http.get<any>(this.server+'/api/Producto').subscribe(data => {
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    }).then(
      (fromRes:any) => {
        console.log(fromRes)
        this.productos=fromRes;
        
      }
    ).catch((fromRej) => {
      console.log(fromRej)
      //this.toastr.error('Error al intentar logearse', 'Error!');
    }
    );      
  }
  agregarCarrito(idprod:any,cantidad:any){
    
    cantidad=parseInt(cantidad);
    console.log(idprod,cantidad);
    return new Promise(async(resolve,reject)=>{
      try{
        this.http.post<any>(this.server+'/api/Producto',{id:idprod,cant:cantidad}).subscribe(data => {
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    })   
  }
  getCarrito(){
    return new Promise(async(resolve,reject)=>{
      try{
        this.http.get<any>(this.server+'/api/Producto/carrito').subscribe(data => {
          this.itemscarrito=data;
          console.log(this.itemscarrito)
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    })   
  }
  eliminarItemCarrito(idcarrito:any){
    return new Promise(async(resolve,reject)=>{
      try{
        this.http.delete<any>(this.server+'/api/Producto/carrito/'+idcarrito).subscribe(data => {
          this.getCarrito();
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    })       
  }
  limpiarCarrito(){
    return new Promise(async(resolve,reject)=>{
      try{
        this.http.get<any>(this.server+'/api/Producto/carritoclean').subscribe(data => {
          this.itemscarrito=[]    
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    }) 
    
  }
  CrearFactura(nit:any,nombre:any){
    //Enviando peticion para crear factura
    //En la peticion se debe de limpiar el carrito
    let data={
      nit:nit,
      name:nombre
    }
    return new Promise(async(resolve,reject)=>{
      try{
        this.http.post<any>(this.server+'/api/factura',data).subscribe(data => {
          this.getCarrito();
          this.itemscarrito=[]    
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    }) 

  }
  editarCarrito(idprod:any,cantidad:any){

  }



  getallFactura(){
    return new Promise(async(resolve,reject)=>{
      try{
        this.http.get<any>(this.server+'/api/factura').subscribe(data => {
          
          this.arrayfacturas=data;
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    }) 

  }  

  getFactura(id:any){
    return new Promise(async(resolve,reject)=>{
      try{
        this.http.get<any>(this.server+'/api/factura/'+id).subscribe(data => {          
          //currentcarrito
          this.currentproduct=data;
          console.log(this.currentproduct)
          this.getcurCarrito(id);
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    }) 
  }  
  getcurCarrito(id:any){
    return new Promise(async(resolve,reject)=>{
      try{
        
        this.http.get<any>(this.server+'/api/factura/fcarrito/'+id).subscribe(data => {          
          //currentcarrito
          this.currentcarrito=data;
          console.log(this.currentcarrito);
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    }) 
  }    

  deleteFactura(id:any){
    return new Promise(async(resolve,reject)=>{
      try{
        
        this.http.delete<any>(this.server+'/api/factura/'+id).subscribe(data => {          
          //currentcarrito
          this.getallFactura();
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    }) 
  }      

  updateFactura(id:any,nit:any,name:any){
    return new Promise(async(resolve,reject)=>{
      try{
        
        this.http.put<any>(this.server+'/api/factura',{corr:id,nit:nit,name:name}).subscribe(data => {          
          this.getallFactura(); 
          resolve(data);
        })   
      }catch(err:any){
        reject({type:-1,msg:'Error al al enviar el post'});
      }
    }) 
  }     

  _onEvent(data: any) {}  
  subscribe(event: string, callback: Function) {}
}
