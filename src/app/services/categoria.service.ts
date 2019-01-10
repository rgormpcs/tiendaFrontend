import { Injectable } from '@angular/core';
import { HOST } from '../variables/var.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url:string = HOST +"/api/categoria"
  constructor(private http: HttpClient) {
   
   }
   listar():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url);
  }
 /* guardar(articulo:Articulo):Observable<Articulo>{
    return this.http.post<Articulo>(this.url,articulo)
  }*/
}
