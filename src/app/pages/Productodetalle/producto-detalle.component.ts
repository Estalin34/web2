import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent {
  producto: any; // Define el tipo adecuado o una interfaz

  // Datos de ejemplo de productos
  productos = [
    {
      id: '1',
      nombre: 'Producto 1',
      imagen: 'assets/images/zapatillas.jpg',
      descripcion: 'Descripción detallada del Producto 1',
      precio: 99.99
    },
    {
      id: '2',
      nombre: 'Producto 2',
      imagen: 'assets/images/Telefono.jpg',
      descripcion: 'Descripción detallada del Producto 2',
      precio: 149.99
    }
    // Agrega más productos aquí si es necesario
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener el ID del producto de la ruta
    const id = this.route.snapshot.paramMap.get('id');

    // Cargar los detalles del producto desde los datos locales
    this.producto = this.productos.find(p => p.id === id);
  }

}
