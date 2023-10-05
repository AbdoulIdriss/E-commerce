import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  insert(key: string, data:any) {

    const stringConverter = JSON.stringify(data)

    localStorage.setItem(key , stringConverter)
  }

  select(key:string):any{
    
    const content = localStorage.getItem(key);

    if (content) {

      const jsonConverter = JSON.parse(content);

      return jsonConverter;
    }
    
    return content
  }

}
