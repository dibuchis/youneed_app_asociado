import { ApiService } from './../../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  pedidos = [];
  page;
  count: number = 0;
  scrollmsg;

  constructor(private storage : Storage, private apiService : ApiService) { }

  loadData(event){
    this.storage.get('user').then(obj => {

      // this.apiService.getPedidos(obj.usuario.id).subscribe(
      //   (data) => {}
      // );

      this.apiService.getPedidos(obj.usuario.id, this.page).subscribe(
        (data) => { 
          if(data.pedidos.length > 0){
            for (let f = 0; f < data.pedidos.length; f++) {
              this.pedidos.push(data.pedidos[this.count]);
              this.count++;
            }
            this.page ++;
            event.target.complete();
          }else{
            event.target.disabled = true;
            this.scrollmsg = 'No tiene más pedidos pendientes';
          }
        }
      );

      
    });
  }

  ngOnInit() {
    this.page = 0;
    this.loadData(event);
  }

}
