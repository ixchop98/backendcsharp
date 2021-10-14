import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../global.service'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public global:GlobalService,private toastr: ToastrService) {
    this.global.getProdutos();
   }

  ngOnInit(): void {
  }
  agregarCarrito(item:any,cantidad:any){
    console.log(item);
    console.log(cantidad.value);
    let respuesta =this.global.agregarCarrito(item.id,cantidad.value)
    respuesta.then(
      (fromRes:any) => {
        this.toastr.success('Agregado al carrito', 'Hecho');
        console.log(fromRes)
        //this.productos=fromRes;
        
      }
    ).catch((fromRej) => {
      console.log(fromRej)
      //this.toastr.error('Error al intentar logearse', 'Error!');
    }
    );          
  }

}
