import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public productos:any =[];
  public itemscarrito:any=[];
  public collapsed=false;
  constructor() { 
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


  agregarCarrito(producto:any){
    //Enviando producto a server para agregar a carrito
  }
  getCarrito(){
    //Obteniendo los productos actual del carrito
  }

  limpiarCarrito(){
    //Enviando peticion para borrar carrito
    this.itemscarrito=[]    
  }
  CrearFactura(nit:any,nombre:any){
    //Enviando peticion para crear factura
    //En la peticion se debe de limpiar el carrito

  }
  editarCarrito(idprod:any,cantidad:any){

  }



  _onEvent(data: any) {}  
  subscribe(event: string, callback: Function) {}
}
