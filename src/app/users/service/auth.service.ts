import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorageService:LocalStorageService) { }

  emailError: null | undefined | string = null;

  verifyEmail( email:string ): string | null {

    let verifiedEmail : boolean = false ;

    const users = this.localStorageService.select('users')

    if (users) {

      for (let i = 0; i < users.length; i++) {

        const actualUser = users[i]; 
        
        if (actualUser.email === email) {
          
          verifiedEmail = true;

          break;

        }
      }
    }

    return verifiedEmail? 'Email already exist' : null;

  }

  //getting the precise Date
  private getCurrentDate():string {

    const date = new Date();

    const createdAt = date.getUTCFullYear() + '_' +
    ('00' + (date.getUTCMonth() + 1)).slice(-2) + '_' +
    ('00' + date.getUTCDate()).slice(-2) + '_' +
    ('00' + date.getUTCHours()).slice(-2) + ':' +
    ('00' + date.getUTCMinutes()).slice(-2) + ':' +
    ('00' + date.getUTCSeconds()).slice(-2)

    return createdAt;

  }

  //sign up with date and verifying email

  register( user:any ) {

    const checkmail = this.verifyEmail(user.email);

    if (checkmail) {

      return {
        error:true,
        message:checkmail
      }
    }

    let users = this.localStorageService.select('users') ?? [];

    user['id'] = Date.now
    user['createdAT'] = this.getCurrentDate();
    
    users.push(user);

    this.localStorageService.insert('users', users);

    return {
      error:false,
      message:'Welcome',
      data:user
    }
  } 

  //Login

  logCheck( email:string , password:string )  {

    let verifylog : null= null ;

    const users = this.localStorageService.select('users')

    if (users) {

      for (let i = 0; i < users.length; i++) {

        const logedUser = users[i]; 
        
        if (logedUser.email === email && logedUser.password === password) {
          
          verifylog = logedUser;

          break;

        }
      }
    }

    if (verifylog) {
      
      this.localStorageService.insert('auth' , verifylog);

      return {

        error: false,
        message: "Loged succesfully",
        data:verifylog
      }
    }

    return {
      error:true,
      message: 'invalid Credentials'
    }

  }

  auth(){

    const user:any = this.localStorageService.select('auth');

    if (user) {
      return {
        error:false,
        message:'user authenticate',
        data:user
      }
    }
    return {
      error:true,
      message:'User not authenticate'
    }
  }

}