import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  nots = [];
  page;
  count: number = 0;
  scrollmsg;

  constructor(private storage : Storage, private apiService : ApiService) { }

  loadData(event){
    this.storage.get('user').then(obj => {

      // this.apiService.getPedidos(obj.usuario.id).subscribe(
      //   (data) => {}
      // );

      this.apiService.getNotificaciones(obj.usuario.id, this.page).subscribe(
        (data) => { 
          console.log(data);
          if(data.notificaciones.length > 0){
            for (let f = 0; f < data.notificaciones.length; f++) {
              this.nots.push(data.notificaciones[this.count]);
              this.count++;
            }
            this.page ++;
            event.target.complete();
          }else{
            event.target.disabled = true;
            this.scrollmsg = 'No tiene más notificaciones';
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
