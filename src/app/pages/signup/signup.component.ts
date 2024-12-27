import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { provideToastr, ToastrService } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

interface signupForm {
  name: FormControl,
  email: FormControl,
  password: FormControl
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm !: FormGroup;

    constructor(
      private router: Router,
      private loginService: LoginService,
      private toastr: ToastrService
    ){
      this.signupForm = new FormGroup({
        name: new FormControl('',[Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required, Validators.minLength(6)]),
        passwordConfirm: new FormControl('',[Validators.required, Validators.minLength(6)])
      })
    }

    submit(){
      this.loginService.login(this.signupForm.value.email, this.signupForm.value.password).subscribe({
        next: () => this.toastr.success("Login efetuado com sucesso!"),
        error: () => this.toastr.error("Ocorreu um erro inesperado!")
      })
    }
    navigate(){
      this.router.navigate(["/login"])
    }
}
