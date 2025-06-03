import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent {
  hobbies = [
  {
  name: 'Escuchar música',
  icon: 'music_note',
  color: '#673AB7',
  description: 'Me relaja, me inspira y me acompaña en diferentes momentos del día.',
  time: 'A diario',
  benefits: [
    'Mejora del estado de ánimo',
    'Estimulación de la creatividad',
    'Relajación y reducción del estrés'
  ]
  },
  {
    name: 'Fotografía',
    icon: 'camera_alt',
    color: '#FF5722',
    description: 'Capturar momentos especiales y paisajes hermosos es mi pasión.',
    benefits: [
      'Desarrollo de la percepción visual',
      'Expresión artística',
      'Conocimiento de composición'
    ]
  },
  {
    name: 'Salir de fiesta',
    icon: 'celebration',
    color: '#9C27B0',
    description: 'Disfruto socializar, bailar y relajarme con amigos en un buen ambiente.',
    time: 'Fines de semana ocasionales',
    benefits: [
      'Fortalecimiento de relaciones sociales',
      'Reducción del estrés',
      'Mejora del estado de ánimo'
    ]
  }
];

}