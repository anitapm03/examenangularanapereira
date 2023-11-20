import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/Cubo';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit{

  public cubos!: Array<Cubo>;
  public marca!: string;

  constructor(private _service: ServiceCubos,
    private _activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.marca = parametros["marca"];

      this._service.getCubosMarca(this.marca).subscribe(response => {
        this.cubos = response;
      })

    })
  }

}
