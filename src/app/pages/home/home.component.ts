import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as ofertasData from '../../../assets/json/oferta.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Asegúrate de que esté en plural 'styleUrls'
})
export class HomeComponent {
  empresaImagen = 'assets/images/descarga.jpeg';
  empresaNombre = 'assets/images/OIP.jpeg';

  // Declara la propiedad 'ofertas' para almacenar los datos del JSON
  ofertas: any[] = [];

  productos = [
    { id: 1, imagen: 'assets/images/1.webp', nombre: 'Producto 1', descripcion: 'Descripción breve del producto 1.' },
    { id: 2, imagen: 'assets/images/oferta.jpg', nombre: 'Producto 2', descripcion: 'Descripción breve del producto 2.' },
    // Añade más productos aquí
  ];
maxresdefaultImagen: any;

  constructor() {
    // Asigna los datos del JSON a la propiedad 'ofertas'
    this.ofertas = (ofertasData as any).default;
  }

  ngOnInit(): void {
    console.log(this.ofertas); 
  }
}