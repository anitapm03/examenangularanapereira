import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/Cubo';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { ActivatedRoute, Params } from '@angular/router';
import { Comentario } from 'src/app/models/Comentario';

@Component({
  selector: 'app-cubodetalle',
  templateUrl: './cubodetalle.component.html',
  styleUrls: ['./cubodetalle.component.css']
})
export class CubodetalleComponent implements OnInit{

  public cubo!: Cubo;
  public id!: string;
  public comentarios!: Array<Comentario>;

  constructor (private _activeRoute: ActivatedRoute,
    private _service: ServiceCubos){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.id = parametros["id"];

      this._service.getCuboId(this.id).subscribe(response => {
        this.cubo = response;
      })

      this._service.getComentariosCubo(this.id).subscribe(response => {
        this.comentarios = response;
      })
    })
  }

}
