import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../global.service";
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  constructor(public global:GlobalService) { }

  ngOnInit(): void {
  }
  crearFactura(nit:any,name:any){
    this.global.CrearFactura(nit,name);
  }
  editarCarrito(idprod:any,cantidad:any){

  }

}
