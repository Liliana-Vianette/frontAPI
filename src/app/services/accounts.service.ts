import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class AccountsService {
_url = 'localhost:8080/cuentas'
  constructor(
    private http: HttpClient
  ){
    console.log('Servicio cuenta')
  }
  getCuentas(){
    let header = new HttpHeaders()
     .set('Type-content', 'aplication/json')

    return this.http.get(this._url, {
      headers: header
    })

  }
}
