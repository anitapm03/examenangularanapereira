import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/Login';
import { Usuario } from 'src/app/models/Usuario';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public login!: Login;

  @ViewChild("cajaemail") cajaEmailRef!: ElementRef;
  @ViewChild("cajapass") cajaPassRef!: ElementRef;

  constructor(private _router: Router,
    private _service: ServiceCubos){}

  hacerLogin():void{

    var email = this.cajaEmailRef.nativeElement.value; 
    var password = this.cajaPassRef.nativeElement.value; 
    this.login = new Login(email,password);

    // environment.login = new Login(email,password);
    this._service.login(this.login).subscribe(response =>{
      environment.token = response.response;
      console.log(environment.token);

      this._router.navigate(["/perfil"]);
    })
  }

}
