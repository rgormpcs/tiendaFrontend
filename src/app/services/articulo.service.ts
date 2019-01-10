import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ListArticleComponent } from '../components/article/list-article/list-article.component';
import { Observable } from 'rxjs';
import { Articulo } from '../models/articulo';
import { HOST } from '../variables/var.constant';


@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  url:string = HOST +"/api/Articulo"
  //url:string=${HOST}/api/articulos;
  constructor(private http: HttpClient) {
   
   }
   listar():Observable<Articulo[]>{
    return this.http.get<Articulo[]>(this.url);
  }
  guardar(articulo:Articulo):Observable<Articulo>{
    return this.http.post<Articulo>(this.url,articulo)
  }
  actualizar(articulo:Articulo):Observable<Articulo>{
    return this.http.put<Articulo>(this.url,articulo)
  }
}
