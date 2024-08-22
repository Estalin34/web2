import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent implements OnInit{
  ejecutivos: Ejecutivo[] = [
    { imagen: 'assets/images/ejecutivo.jpg', nombre: 'Juan Pérez', cargo: 'CEO & Fundador', descripcion: 'Juan es el fundador de la empresa con más de 20 años de experiencia en el sector.' },
    { imagen: 'assets/images/mujer-ejecutiva.jpg', nombre: 'Maria García', cargo: 'Directora de Operaciones', descripcion: 'Maria lidera nuestro equipo de operaciones con un enfoque en la eficiencia y la excelencia.' },
    { imagen: 'assets/images/ejecutivo.jpg', nombre: 'Carlos López', cargo: 'Director Financiero', descripcion: 'Carlos maneja nuestras finanzas con una visión estratégica y un enfoque en la sostenibilidad.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
