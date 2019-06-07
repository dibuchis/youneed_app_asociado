import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  user

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.get('user')
      .then( data => {
        this.user = data.usuario;
      });
  }

}
