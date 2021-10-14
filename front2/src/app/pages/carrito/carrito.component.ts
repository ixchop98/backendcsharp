import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../global.service";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  
  constructor(public global:GlobalService,private toastr: ToastrService) { 
    
  }

  ngOnInit(): void {
    this.global.getCarrito();
  }
  crearFactura(nit:any,name:any){
    this.global.CrearFactura(nit,name);
    this.toastr.success('Factura creada', 'Hecho');
  }
  editarCarrito(idprod:any,cantidad:any){

  }
  eliminarItemCarrito(idcarrito:any){
    this.global.eliminarItemCarrito(idcarrito);
    
  }

  getTotal(){
    let total=0;
    for (let index = 0; index < this.global.itemscarrito.length; index++) {
      total = total + parseInt(this.global.itemscarrito[index].subtotal);
      
    }
    return total;
  }
  
}
