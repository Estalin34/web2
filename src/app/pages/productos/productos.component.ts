import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule,RouterModule ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
    // Define las pestañas
    tabs = [
      { id: 'home', nombre: 'Inicio', seleccionado: true },
      { id: 'productos', nombre: 'Productos', seleccionado: false },
      // Añade más pestañas si es necesario
    ];
    
  
   
    productos = [
      { id: 1, nombre: 'Producto 1', descripcion: 'Descripción breve del producto 1.', imagen: 'assets/images/camara.jpg' },
      { id: 2, nombre: 'Producto 2', descripcion: 'Descripción breve del producto 2.', imagen: 'assets/images/chaqueta.jpg' }
      // Puedes agregar más productos aquí
    ];

}
