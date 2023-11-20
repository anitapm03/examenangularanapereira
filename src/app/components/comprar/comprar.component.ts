import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/Compra';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Cubo } from 'src/app/models/Cubo';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit{

  public cubos!: Array<Cubo>;
  public compra!: Compra;
  public id!: string;

  @ViewChild("selectcubo") selectCuboRef!: ElementRef;

  constructor(private _router: Router,
    private _service: ServiceCubos,
    private _activeRoute: ActivatedRoute){}

  ngOnInit(): void {

    this._service.getCubos().subscribe(response => {
      this.cubos=response;
    })

    this._activeRoute.params.subscribe((parametros: Params) => {
      this.id = parametros["id"];
    })
  }

  hacerCompra(): void{

    var idCubo = this.selectCuboRef.nativeElement.value;
    // var idPedido = 886;
    // var idUsuario = parseInt(this.id);
    // var fechaActual = new Date();
    // //var fechaFormateada = fechaActual.toISOString();
    // var fechaPedido = fechaActual;

    // this.compra = new Compra(idCubo, idPedido, idUsuario, fechaPedido);

    this._service.comprar(idCubo).subscribe(response=>{
      this._router.navigate(["/perfil"]);
    })
  }
}
