import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://app.youneed.com.ec/api/';
  ajaxurl = 'https://app.youneed.com.ec/ajax/';
  apiKey = ''; // <-- Enter your own key here!
 
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }


    /**
  * Login to Youneed Api 
  * map the result to return only registered user
  * 
  * @param {string} username 
  * @param {string} password 
  * @returns Observable with the search results
  */
 login(username: string, password: string): Observable<any> {
  
    let config ={ headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') };
    let postData = "email=" + username + "&clave=" + password;
    return this.http.post(`${this.url}login`, postData, config).pipe(
      map(result => result)
    );
  }

      /**
  * Return pedidos 
  * map the result to return only registered user
  * 
  * @param {number} id 
  * @returns Observable with the search results
  */
 getPedidos(id: number): void {
  
  let config ={ headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') };
  let postData = "uid=" + id ;
  this.http.post(`${this.ajaxurl}getpedidos`, postData, config).subscribe( 

  );
}
}
