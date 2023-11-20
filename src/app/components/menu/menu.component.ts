import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  public marcas!: Array<string>;

  constructor(private _service: ServiceCubos){}
  ngOnInit(): void {
    this._service.getMarcas().subscribe(response => {
      this.marcas = response;
    })
  }
}
