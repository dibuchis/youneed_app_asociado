import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  proxyurl = 'http://localhost:8100/api/';
  url = 'https://app.youneed.com.ec/api/';
  ajaxurl = 'https://app.youneed.com.ec/ajax/';
  apiKey = ''; // <-- Enter your own key here!
 
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }


  testApi() {
  
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  
  }

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
  * map the result to return pedidos
  * 
  * @param {number} id 
  * @param {number} page 
  * @returns Observable with the search results
  */
  getPedidos(id: number, page: number): Observable<any> {
  
  let config ={ headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') };
  let postData = "uid=" + id + "&page=" + page;

  return this.http.post(`${this.url}getpedidos`, postData, config).pipe(
       map(result =>  result)
   );
  }

    /**
  * Return notificaciones 
  * map the result to return notifications
  * 
  * @param {number} id 
  * @param {number} page 
  * @returns Observable with the search results
  */
 getNotificaciones(id: number, page: number): Observable<any> {
  
  let config ={ headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') };
  let postData = "uid=" + id + "&page=" + page;

  return this.http.post(`${this.url}getnotificaciones`, postData, config).pipe(
       map(result =>  result)
   );
  }
}
