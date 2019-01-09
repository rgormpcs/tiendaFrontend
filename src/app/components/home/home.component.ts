import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articulos: Articulo[] = new Array();
 constructor(private articuloService:ArticuloService){}
   
 

  ngOnInit() {
  this.articuloService.listar().subscribe(resp =>{
    this.articulos=resp;
  })
  }

}
