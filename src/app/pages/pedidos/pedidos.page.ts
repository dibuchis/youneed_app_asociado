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
  pedido = {
    id : 0,
    razon_social : "",
    estado : 0
  }

  constructor(private storage : Storage, private apiService : ApiService) { }

  ngOnInit() {
    this.storage.get('user').then(obj => {
      // console.log(obj.usuario.id);
      var res = this.apiService.getPedidos(obj.usuario.id);
      //this.pedido
      console.log(res['pedidos']);
    });
  }

}
