import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, 
  Validators,ValidatorFn,ValidationErrors} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {GlobalService} from '../../global.service'
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  public form:FormGroup;
  public numcuenta:AbstractControl;
  public monto:AbstractControl;
  constructor(fb:FormBuilder,private toastr: ToastrService,private _state:GlobalService) { 
    this.form = fb.group({
      'numcuenta': ['', [Validators.required]],
      'monto': ['', [Validators.required]],
    });    
    this.numcuenta = this.form.controls['numcuenta'];
    this.monto = this.form.controls['monto'];        
  }

  ngOnInit(): void {
  }
  public onSubmit(values:any):void {

    //return;
    let data={
      origen:this._state.getCurrentUser().numcuenta,
      destino:values.numcuenta,
      monto:values.monto
    }
    if (this.form.valid) {
      let respuesta= this._state.makeTransaction(data);
      respuesta.then(
        (fromRes:any) => {
          console.log(fromRes);
          if(fromRes.msg==='monto'){
            this.toastr.error('El monto es menor al disponible', 'Error!');
          }
          else if(fromRes.msg==-1){
            this.toastr.error('Error en el servidor', 'Error!');
          }else if(fromRes.msg==false){
            this.toastr.error('No se encontro la cuenta destino, verifique los datos', 'Error!');
          }else{
            this.toastr.success('Monto transferido:');
          }
        }
      ).catch((fromRej:any) => {
        this.toastr.error('Error al efectuar la transacción', 'Error!');
      }
      );      
      
    }else{
      this.form.markAllAsTouched();
      this.toastr.error('Hay campos sin llenar o que no cumplen condiciones', 'Error!');
    }
  }  

}
