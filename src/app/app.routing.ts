import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./components/home/home.component";
import { MarcaComponent } from "./components/marca/marca.component";
import { CubodetalleComponent } from "./components/cubodetalle/cubodetalle.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { ComprarComponent } from "./components/comprar/comprar.component";

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "marcas/:marca", component: MarcaComponent },
    { path: "cubo/:id", component: CubodetalleComponent },
    { path: "login", component: LoginComponent },
    { path: "registrarse", component: RegistroComponent },
    { path: "perfil", component: PerfilComponent },
    { path: "comprar/:id",  component: ComprarComponent }
]

export const appRoutingProvider: any[]=[];
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);