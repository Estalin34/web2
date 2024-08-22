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
      "id": "1",
      "nombre": "Audífonos Inalámbricos",
      "imagen": "assets/images/audifonos.jpeg",
      "descripcion": "Audífonos inalámbricos de alta calidad con cancelación de ruido, sonido envolvente y una batería de larga duración, ideales para disfrutar de tu música favorita en cualquier lugar.",
      "precio": 99.99
    },
    {
      "id": "2",
      "nombre": "Teléfono Inteligente",
      "imagen": "assets/images/Telefono.jpg",
      "descripcion": "Teléfono inteligente de última generación con pantalla OLED de 6.5 pulgadas, cámara de alta resolución y 128 GB de almacenamiento interno, perfecto para capturar momentos y disfrutar de aplicaciones.",
      "precio": 149.99
    },
    {
      "id": "3",
      "nombre": "Chaqueta Impermeable",
      "imagen": "assets/images/chaqueta.jpg",
      "descripcion": "Chaqueta impermeable de diseño moderno y elegante, confeccionada con materiales de alta calidad que ofrecen protección contra el clima frío y lluvioso. Ideal para actividades al aire libre.",
      "precio": 199.99
    },
    {
      "id": "4",
      "nombre": "Cámara Digital",
      "imagen": "assets/images/camara.jpg",
      "descripcion": "Cámara digital compacta con sensor de alta resolución, zoom óptico de 10x y estabilización de imagen, perfecta para capturar fotos y videos con gran detalle y claridad.",
      "precio": 249.99
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener el ID del producto de la ruta
    const id = this.route.snapshot.paramMap.get('id');

    // Cargar los detalles del producto desde los datos locales
    this.producto = this.productos.find(p => p.id === id);
  }

}
