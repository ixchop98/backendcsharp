import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators, ValidatorFn, ValidationErrors} from '@angular/forms';
//import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form:FormGroup;
  public nit:AbstractControl;
  public name:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;  

  public submitted:boolean = false;

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass=group.get('password')?.value;
    let confirmPass=group.get('confirm')?.value;
    return pass === confirmPass ? null : { notSame: true }
  }

  
  constructor(fb:FormBuilder,private toastr: ToastrService) {

    this.form = fb.group({
      'nit': ['', [Validators.required]],
      'name': ['', [Validators.required]],
      'email': ['', Validators.compose([Validators.required,Validators.email])],
      'password': ['', [Validators.required]],
      'confirm': [''],
    },{ validators: this.checkPasswords });
    this.nit =this.form.controls['nit'];
    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.form.controls['password'];
    this.repeatPassword = this.form.controls['confirm'];    
  }


  public defaultPicture = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU';
  public profile:any = {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU'
  };  

  public onSubmit(values:Object):void {
    
    this.submitted = true;
    if (this.form.valid) {
      //this.toastr.success('Usuario creado, el no. cuenta asignado es:'+fromRes.result, 'Hecho',{disableTimeOut:true});
      this.toastr.success('Usuario creado, puede iniciar sesion con sus credenciales', 'Hecho');
      
    }else{
      this.form.markAllAsTouched();
      this.toastr.error('Hay campos sin llenar o que no cumplen condiciones', 'Error!');

    }    
  }

  ngOnInit(): void {
  }

}
