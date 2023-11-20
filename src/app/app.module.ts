import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProvider } from './app.routing';
import { ServiceCubos } from './services/service.cubos';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MarcaComponent } from './components/marca/marca.component';
import { CubodetalleComponent } from './components/cubodetalle/cubodetalle.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprarComponent } from './components/comprar/comprar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    MarcaComponent,
    CubodetalleComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    ComprarComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule, HttpClientModule
  ],
  providers: [appRoutingProvider, ServiceCubos],
  bootstrap: [AppComponent]
})
export class AppModule { }
