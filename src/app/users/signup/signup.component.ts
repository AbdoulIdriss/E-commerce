import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  error: string | null = 'Email already available';


  updatedForm! : FormGroup;

  formBuilder = new FormBuilder(); //Always initialize form builder by using this method for forms

 constructor( private authService: AuthService, private router:Router) {} //cretad a private constructor for the form builder which 
  // will be accesbile accesible only in the form

  ngOnInit():void 
  { //here i created a method containing our form and validations requirements

    this.updatedForm = this.formBuilder.group({

      username : new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),

      email : new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      password : new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W\w]{8,}/)
      ])

    })
  }

  onSubmit(){

    const warning = this.authService.register(this.updatedForm.value)

    if (warning.error === true) {

      alert(this.error)

    } else {

      this.router.navigate(['dashboard']);
    }

  }

}
