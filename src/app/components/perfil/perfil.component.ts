import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/Compra';
import { Usuario } from 'src/app/models/Usuario';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  public compras!: Array<Compra>;
  public usuario!: Usuario;

  constructor(private _service: ServiceCubos,private _router: Router){}

  ngOnInit(): void {

    this._service.getPerfil().subscribe(response => {
      this.usuario = response;
    })

    this._service.verCompras().subscribe(response => {
      this.compras = response;
    })

    
  }

  logout():void{
    environment.token = "";
    this._router.navigate(["/"]);
  }

}
