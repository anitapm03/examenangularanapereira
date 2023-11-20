import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Cubo } from '../models/Cubo';
import { Login } from '../models/Login';
import { Usuario } from '../models/Usuario';

@Injectable() 
export class ServiceCubos {

    constructor(private _http: HttpClient){}

    getCubos(): Observable<any>{

        var request = "api/cubos";
        var url = environment.urlApi + request;

        return this._http.get(url);
    }

    getMarcas(): Observable<any> {

        var request = "api/cubos/marcas";
        var url = environment.urlApi + request;

        return this._http.get(url);
    }

    getCubosMarca(marca: string): Observable<any>{

        var request = "api/cubos/cubosmarca/"+ marca;
        var url = environment.urlApi + request;

        return this._http.get(url);
    }

    getCuboId(id:string): Observable<any>{

        var request = "api/cubos/"+id;
        var url = environment.urlApi + request;

        return this._http.get(url);
    }

    getComentariosCubo(id:string): Observable<any>{

        var request = "api/comentarioscubo/getcomentarioscubo/"+id;
        var url = environment.urlApi + request;

        return this._http.get(url);
    }

    login(login:Login): Observable<any>{

        var json = JSON.stringify(login);
        var header = new HttpHeaders().set("content-type", "application/json");
        var request = "api/manage/login";
        var url = environment.urlApi + request;

        return this._http.post(url, json, {headers: header});
    }

    registro(usuario: Usuario): Observable<any>{

        var json = JSON.stringify(usuario);
        var header = new HttpHeaders().set("content-type", "application/json");
        var request = "api/manage/registrousuario";
        var url = environment.urlApi + request;

        return this._http.post(url, json, {headers: header});
    }

    verCompras(): Observable<any>{

        var header = new HttpHeaders().set('Authorization', `Bearer ${environment.token}`);
        var request = "api/compra/comprasusuario";
        var url = environment.urlApi + request;

        return this._http.get(url, {headers: header});
    }

    getPerfil(): Observable<any>{

        var header = new HttpHeaders().set('Authorization', `Bearer ${environment.token}`);
        var request = "api/manage/perfilusuario";
        var url = environment.urlApi + request;

        return this._http.get(url, {headers: header});
    }

    comprar(id:string): Observable<any>{
        
        var header = new HttpHeaders().set('Authorization', `Bearer ${environment.token}`);
        var request = "api/compra/insertarpedido/"+id;
        var url = environment.urlApi + request;

        return this._http.post(url, {headers: header});
    }

    
}
