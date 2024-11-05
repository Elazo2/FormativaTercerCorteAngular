import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {
        path: 'listado',
        component: ListadoProductosComponent
    },
    {
        path:'detalle/:id',
        component: DetalleProductoComponent
    },
    {
        path:'login',
        component: LoginComponent
    }
];
