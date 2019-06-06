import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  
  pedidos
  page

  constructor(private storage : Storage, private apiService : ApiService) { }

  loadData(){
    this.storage.get('user').then(obj => {

      // this.apiService.getPedidos(obj.usuario.id).subscribe(
      //   (data) => {}
      // );

      this.apiService.getPedidos(obj.usuario.id, this.page).subscribe(
        (data) => { 
          if(data){
            this.pedidos = (data.pedidos)
            this.page ++;
          }
        }
      );
      
    });
  }

  ngOnInit() {
    this.page = 1;
    this.loadData();
  }

}
