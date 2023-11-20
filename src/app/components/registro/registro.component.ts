import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  public usuario!: Usuario;

  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajaemail") cajaEmailRef!: ElementRef;
  @ViewChild("cajapass") cajaPassRef!: ElementRef;

  constructor(private _router: Router,
    private _service: ServiceCubos){}

  hacerRegistro():void{

    var idUsuario = 886;
    var nombre = this.cajaNombreRef.nativeElement.value;
    var email = this.cajaEmailRef.nativeElement.value;
    var pass = this.cajaPassRef.nativeElement.value;

    this.usuario = new Usuario(idUsuario, nombre, email, pass);

    this._service.registro(this.usuario).subscribe(response => {
      //console.log(response);
      this._router.navigate(["/login"]);
    })

  }

}
