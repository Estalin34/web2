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
  ejecutivos = [
    { imagen: 'assets/images/ejecutivo.jpg', nombre: 'Juan Pérez', cargo: 'CEO & Fundador' },
    { imagen: 'assets/images/mujer-ejecutiva.jpg', nombre: 'Maria García', cargo: 'Directora de Operaciones' },
    { imagen: 'assets/images/ejecutivo.jpg', nombre: 'Carlos López', cargo: 'Director Financiero' }
    // Puedes agregar más ejecutivos aquí
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
