import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor() { }

  verifyLogAndPass(email: string , password:string){

    const userLog = localStorage.getItem('user');
    
    if (userLog) {
      
      const localUser = JSON.parse(userLog);

      const loginCheck = localUser.find( (userLog:any) => userLog.email === email && userLog.password ===  password )

      console.log(loginCheck);
  
      if (loginCheck) {
  
        return true;
        
      } 
      
    }
    return false;

  }

}
