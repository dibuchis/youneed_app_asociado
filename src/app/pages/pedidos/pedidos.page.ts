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

  pedidos = []
  page
  count: number = 0;

  constructor(private storage : Storage, private apiService : ApiService) { }

  loadData(event){
    this.storage.get('user').then(obj => {

      // this.apiService.getPedidos(obj.usuario.id).subscribe(
      //   (data) => {}
      // );

      this.apiService.getPedidos(obj.usuario.id, this.page).subscribe(
        (data) => { 
          if(data){
            for (let f = 0; f < 2; f++) {
              this.pedidos.push(data.pedidos[this.count]);
              this.count++;
            }
            this.page ++;
          }
        }
      );

      event.target.complete();
      
    });
  }

  ngOnInit() {
    this.page = 1;
    this.loadData(event);
  }

}
