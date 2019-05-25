import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Spinner } from 'spin.js';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  result: Observable<any>;
  login = {
    username:  "",
    password:  ""
  }
  errormsg: string = "";

  constructor(private apiService : ApiService, private storage : Storage, private router : Router) { }

  ngOnInit() {
  }

  submit() {
    
    this.storage.clear();
    var target = document.querySelector('body');
    var spinner = new Spinner({lines:12, scale : 1.3, length : 10}).spin(target);
    
    this.errormsg = "";
    // Call our service function which returns an Observable
    this.apiService.login(this.login.username, this.login.password).subscribe(
      result => {
        // console.log(result['status']);
        // console.log(result);
          if(result['status']){
            this.storage.set('user', result['data']);
            this.router.navigate(['/pedidos']);
            spinner.stop();
          }else{
            Swal.fire({
              title: 'Error!',
              text: 'Error de acceso, vuelve a intentarlo.',
              confirmButtonText: 'Regresar'
            })
            //this.errormsg = result['message'];
            spinner.stop();
          };
      }
    );
  }

}
