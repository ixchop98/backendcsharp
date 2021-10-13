import { Component, OnInit,Input } from '@angular/core';



import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
        <input type="text" class="form-control" id="inputFirstName" placeholder="First Name">
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <label for="inputLastName">Nombre</label>
        <input type="text" class="form-control" id="inputLastName" placeholder="Last Name">
      </div>
    </div>
   
  </div>    
  <div class="row">
    <div class="col-sm-6">
        <div class="form-group">
          <label for="inputFirstName">Fecha</label>
          <input type="date" class="form-control" id="inputFirstName" placeholder="First Name">
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label for="inputLastName">Total</label>
          <input type="number" class="form-control" id="inputLastName" placeholder="Last Name">
        </div>
      </div>       
  </div>
  <div class="row">
    <div class="col-md-2">
        <button *ngIf="!editing" (click)="editar()" type="button" class="btn btn-default">Editar</button>
        <button *ngIf="editing" (click)="guardar()"type="button" class="btn btn-primary">Guardar</button>
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

              <tr>
                <td class="table-id">0</td>
                <td>Producto1</td>
                <td>
                  <label *ngIf="!editing" >2</label>
                  <input *ngIf="editing" min="0" type="number" class="form-control"  >
                </td>
                <td>Q 25</td>
                <td>Q 50</td>            
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
  constructor(public activeModal: NgbActiveModal) {}
  editar(){
    this.editing=!this.editing;
  }
  guardar(){
    this.editing=!this.editing;
    //Mandar la informacion al server
  }  

}




@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }    
  eliminar(correlativo:any){

  }  

}
