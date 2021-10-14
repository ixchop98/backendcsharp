import { Component, OnInit,Input } from '@angular/core';



import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import {GlobalService} from '../../global.service';
@Component({
  selector: 'ngbd-modal-content',
  
  template: `
    <div class="modal-header ">
      <h4 class="modal-title">Factura</h4>
      <button  style="color: white;" type="button" class="close " aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">





  <div class="row">
    <div class="col-sm-6">
      <div class="form-group">
        <label for="inputFirstName">Nit</label>
        <input #nit [disabled]="!editing" value ="{{this.global.currentproduct.nit}}" type="number" class="form-control" id="inputFirstName" placeholder="Nit">
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <label for="inputLastName">Nombre</label>
        <input #name [disabled]="!editing" value ="{{this.global.currentproduct.nombre}}" type="text" class="form-control" id="inputLastName" placeholder="Last Name">
      </div>
    </div>
   
  </div>    
  <div class="row">
    <div class="col-sm-6">
        <div class="form-group">
          <label for="inputFirstName">Fecha</label>
          <input value="{{this.global.currentproduct.fecha}}" disabled=true type="text" class="form-control" id="inputFirstName" placeholder="First Name">
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label for="inputLastName">Total</label>
          <input value ="{{this.global.currentproduct.total}}" disabled=true type="number" class="form-control" id="inputLastName" placeholder="Last Name">
        </div>
      </div>       
  </div>
  <div class="d-flex">
    <div class="col-md-2">
        <button *ngIf="!editing" (click)="editar()" type="button" class="btn btn-default">Editar</button>
        <button *ngIf="editing" (click)="guardar(nit.value,name.value)"type="button" class="btn btn-primary">Guardar</button>                
      </div>    
      <div class="col-md-2">
      <button *ngIf="editing" (click)="activeModal.dismiss('Cross click')" type="button" class="btn btn-default">Cancelar</button>      
      </div>
  </div>  
    </div>



    <div class="row">


<div class="col-md-12">
    <app-ba-card title="Productos Actuales" baCardClass="with-scroll table-panel">
        <div class="horizontal-scroll">
            <table class="table table-condensed">
              <thead>
              <tr>
                <th class="table-id">#</th>
                <th>Producto</th>
                <th class="col-md-1">Cantidad</th>
                <th>Precio(U)</th>
                <th>Subtotal</th>
                <th *ngIf="editing">Quitar</th>
              </tr>
              </thead>
              <tbody>

              <tr *ngFor="let item of this.global.currentcarrito;index as i;">
                <td class="table-id">{{item.id}}</td>
                <td>Producto1</td>
                <td>
                  <!--label *ngIf="!editing" >{{item.nombre}}</label-->
                  <input  #cantidad value="{{item.cantidad}}" [disabled]="!editing" min="0" type="number" class="form-control"  >
                </td>
                <td>Q {{item.precio}}</td>
                <td>Q {{item.precio*item.cantidad}}</td>            
                <td *ngIf="editing">
                    <button type="button" class="btn btn-danger">X</button>
                </td>
              </tr>
              
              
              </tbody>
            </table>
          </div>
          
    </app-ba-card>
  </div>
  
  


</div>    
    <!--div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div-->
  `,
  styleUrls: ['./facturas.component.scss'],
})
export class NgbdModalContent {
  @Input() name:any;
  editing=false;
  constructor(public activeModal: NgbActiveModal,public global:GlobalService,private toastr: ToastrService) {}
  editar(){
    this.editing=!this.editing;
  }
  guardar(nit:any,name:any){
    this.editing=!this.editing;    
    this.global.updateFactura(this.global.currentproduct.corr,nit,name);
    this.toastr.success('Factura editada', 'Hecho');
    this.activeModal.close('Close click');
    //Mandar la informacion al server
  }  
  toint(data:any){
    return parseInt(data);
  }

}




@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent implements OnInit {

  constructor(private modalService: NgbModal,public global:GlobalService) { }

  ngOnInit(): void {
    this.global.getallFactura();
  }
  open(corr:any) {
    
    this.global.getFactura(corr)
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }    
  eliminar(correlativo:any){
    this.global.deleteFactura(correlativo);
  }  

}
