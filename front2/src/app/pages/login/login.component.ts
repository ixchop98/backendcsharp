import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators,FormControl
} from '@angular/forms';
import {AuthService} from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  constructor(fb:FormBuilder, authS:AuthService,private toastr: ToastrService,public router:Router) {
    this.form = fb.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngOnInit(): void {
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      this.toastr.success('Correcto, iniciando session', 'Hecho');
      this.router.navigate(['/pages']);

    }else{
      this.form.markAllAsTouched();
      this.toastr.error('Hay campos sin llenar o que no cumplen condiciones', 'Error!');
    }    
  }

}
