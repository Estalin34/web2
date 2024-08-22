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
  tabs = [
    { id: 'home', nombre: 'Inicio', seleccionado: true },
    { id: 'productos', nombre: 'Productos', seleccionado: false },
    // Añade más pestañas si es necesario
  ];

  productos = [
    { id: '1', nombre: 'Audífonos Inalámbricos', descripcion: 'Audífonos inalámbricos de alta calidad con cancelación de ruido, sonido envolvente y una batería de larga duración, ideales para disfrutar de tu música favorita en cualquier lugar.', imagen: 'assets/images/audifonos.jpeg', precio: 99.99 },
    { id: '2', nombre: 'Teléfono Inteligente', descripcion: 'Teléfono inteligente de última generación con pantalla OLED de 6.5 pulgadas, cámara de alta resolución y 128 GB de almacenamiento interno, perfecto para capturar momentos y disfrutar de aplicaciones.', imagen: 'assets/images/Telefono.jpg', precio: 149.99 },
    { id: '3', nombre: 'Chaqueta Impermeable', descripcion: 'Chaqueta impermeable de diseño moderno y elegante, confeccionada con materiales de alta calidad que ofrecen protección contra el clima frío y lluvioso. Ideal para actividades al aire libre.', imagen: 'assets/images/chaqueta.jpg', precio: 199.99 },
    { id: '4', nombre: 'Cámara Digital', descripcion: 'Cámara digital compacta con sensor de alta resolución, zoom óptico de 10x y estabilización de imagen, perfecta para capturar fotos y videos con gran detalle y claridad.', imagen: 'assets/images/camara.jpg', precio: 249.99 }
  ];
ofertas: any;
}
