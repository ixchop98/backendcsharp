import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, 
        Validators,ValidatorFn,ValidationErrors} from '@angular/forms';
//import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';

//export class MyErrorStateMatcher implements ErrorStateMatcher {
//  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//    const invalidCtrl = !!(control?.invalid && control?.parent?.dirty);
//    const invalidParent = !!(control?.parent?.invalid && control?.parent?.dirty);
//
//    return invalidCtrl || invalidParent;
//  }
//}
import {AuthService} from '../auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form:FormGroup;
  public names:AbstractControl;
  public lastnames:AbstractControl;
  public dpi:AbstractControl;
  public email:AbstractControl;
  public saldo:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public submitted:boolean = false;

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass=group.get('password')?.value;
    let confirmPass=group.get('confirm')?.value;
    return pass === confirmPass ? null : { notSame: true }
  }

  constructor(fb:FormBuilder,
    private toastr: ToastrService,
    public auth:AuthService
    ) {

    this.form = fb.group({
      'names': ['', [Validators.required]],
      'lastnames': ['', [Validators.required]],
      'dpi': ['', [Validators.required]],
      'email': ['', Validators.compose([Validators.required,Validators.email])],
      'saldo': ['', [Validators.required]],
      'password': ['', [Validators.required]],
      'confirm': [''],

    },{ validators: this.checkPasswords });

    this.names = this.form.controls['names'];
    this.lastnames = this.form.controls['lastnames'];
    this.dpi = this.form.controls['dpi'];
    this.email = this.form.controls['email'];
    this.saldo = this.form.controls['saldo'];
    this.password = this.form.controls['password'];
    this.repeatPassword = this.form.controls['confirm'];    
  
  }


  //public defaultPicture = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU';
  //public profile:any = {
  //  picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU'
  //};  

  public onSubmit(values:any):void {
    //this.toastr.success('Usuario creado', 'Hecho',{disableTimeOut:true});
    //return;
    //this.submitted = true;
    //console.log(values);
    //console.log(this.form.valid)
    let data={
      nombres:values.names,
      apellidos:values.lastnames,
      dpi:values.dpi,
      saldo:values.saldo,
      email:values.email,
      password:values.password      
    };
    //return;
    if (this.form.valid) {
      let respuesta= this.auth.sinUpUser(data);
      respuesta.then(
        (fromRes) => {
          console.log(fromRes);
          if(fromRes.msg==-1){
            this.toastr.error('Error en el servidor', 'Error!');
          }else if(fromRes.msg==='username'){
            this.toastr.error('Ya existe un usuario con esta cuenta', 'Error!');
          }else if(fromRes.msg==='email'){
            this.toastr.error('Ya existe un usuario con este email', 'Error!');
          }else if(fromRes.msg==='dpi'){
            this.toastr.error('Ya existe un usuario con este dpi', 'Error!');
          }else{
            this.toastr.success('Usuario creado, el no. cuenta asignado es:'+fromRes.result, 'Hecho',{disableTimeOut:true});
          }
        }
      ).catch((fromRej) => {
        //console.log(fromRej)
        this.toastr.error('Error al crear el usuario', 'Error!');
      }
      );      
      
    }else{
      this.form.markAllAsTouched();
      this.toastr.error('Hay campos sin llenar o que no cumplen condiciones', 'Error!');
      console.log('INVALIDOOO');
    }
  }

  ngOnInit(): void {
    
  }

}
