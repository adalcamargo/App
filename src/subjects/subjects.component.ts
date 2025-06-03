import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule, 
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  subjects = [
   {
    name: 'Inglés',
    color: '#4CAF50',
    lightColor: '#C8E6C9',
    difficulty: 3,
    reason: 'Me interesa comunicarme con personas de diferentes culturas y acceder a contenido global.',
    favoriteAspects: ['Comunicación', 'Aprendizaje cultural', 'Vocabulario']
  },
  {
    name: 'Química',
    color: '#FF9800',
    lightColor: '#FFE0B2',
    difficulty: 4,
    reason: 'Me intriga entender cómo se comporta la materia y las reacciones que ocurren a nuestro alrededor.',
    favoriteAspects: ['Experimentos', 'Estructura de la materia', 'Aplicación científica']
  },
  {
    name: 'Programación',
    color: '#009688',
    lightColor: '#B2DFDB',
    difficulty: 3,
    reason: 'Me gusta construir cosas desde cero y automatizar procesos con código.',
    favoriteAspects: ['Creatividad técnica', 'Resolución de problemas', 'Innovación']
  }
];
}