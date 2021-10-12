import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators,FormControl
} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { ToastService } from '../../theme/components/toast/toast-service';
//import {AuthService} from '../auth.service';
import {GlobalService} from '../../global.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form:FormGroup;
  public cuenta:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  constructor(fb:FormBuilder,
            public authS:AuthService,
            public router:Router, 
            private toastr: ToastrService,
            public global:GlobalService
    
    ) {
    this.form = fb.group({
      'cuenta': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    });

    this.cuenta = this.form.controls['cuenta'];
    this.password = this.form.controls['password'];
  }

  ngOnInit(): void {
    if(this.authS.LoginStatus){
      //this.toastr.success('', 'Bienvenido!');
      //this.router.navigate(['/pages']);
    }    
  }

  public onSubmit(values:any):void {
    this.submitted = true;
    console.log(values);
    console.log(this.form.valid);
    if (this.form.valid) {
      // your code goes here
      console.log('Envinado login');
      let respuesta= this.authS.logInUser(values.cuenta,values.password);
      respuesta.then(
        (fromRes) => {
          if(!fromRes.msg){
            this.toastr.error('Credenciales incorrectas', 'Error!');
          }else{
            console.log(fromRes);
            this.global.setCurrentUser(fromRes.result[0])
            this.authS.setLoginStatus(true);
            this.router.navigate(['/pages']);
            this.toastr.success('Usuario correcto', 'Hecho');
          }
        }
      ).catch((fromRej) => {
        console.log(fromRej)
        this.toastr.error('Error al intentar logearse', 'Error!');
      }
      );      
      
      
    }
  }

  


}
