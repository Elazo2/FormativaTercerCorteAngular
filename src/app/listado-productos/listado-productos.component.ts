import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { Producto } from '../interfaces/producto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent implements OnInit {

  productos: Producto[] = []

  constructor(private readonly productosService: ProductosService){}
  
  
  ngOnInit(): void {
    this.obtenerProductos()
  }


  obtenerProductos(){
    this.productosService.obtenerTodosProductos().subscribe({
      next: (data: Producto[]) => {
        this.productos = data
        console.log(data)
      }
    })
  }
}
