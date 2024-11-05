import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  // private readonly http = inject(HttpClient);
  constructor(private readonly http: HttpClient) { }

  obtenerTodosProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(environment.apiUrl + 'products')
  }

  obtenerProductoPorId(id:string):Observable<Producto>{
    // return this.http.get<Producto>(environment.apiUrl + 'products/' + id)
    return this.http.get<Producto>(`${environment.apiUrl}products/${id}`)
  }
}
