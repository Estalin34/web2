import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import ofertasData from '../../../assets/json/oferta.json';
import productosData from '../../../assets/json/productos.json';
import { Oferta } from '../../utils/ofertas';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Asegúrate de que esté en plural 'styleUrls'
})
export class HomeComponent {
  empresaNombre = 'TEMU';
  empresaImagen = 'assets/images/empresarial.jpg';

  // Declara la propiedad 'ofertas' utilizando la interfaz 'Oferta'
  ofertas: Oferta[] = []; // Asegúrate de que esto sea un array de ofertas

  productos = productosData; // Asumiendo que productosData es del tipo correcto

  constructor() {}

  ngOnInit(): void {
    this.ofertas = ofertasData; // Asigna los datos del JSON a la propiedad 'ofertas'
    console.log(this.ofertas); // Verifica que los datos se están cargando correctamente
  }
}