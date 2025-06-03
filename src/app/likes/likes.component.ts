import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-likes',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {
  categories = [
  {
    name: 'Actividades Sociales',
    icon: 'groups',
    color: '#4CAF50',  // Verde
    lightColor: '#E8F5E9', // Verde claro
    items: [
      { name: 'Salir con amigos', icon: 'emoji_people' },
      { name: 'Escuchar música', icon: 'headphones' },
      { name: 'Viajar a lugares', icon: 'flight_takeoff' }
    ]
  },
  {
    name: 'Entretenimiento',
    icon: 'theaters',
    color: '#9C27B0',  // Morado
    lightColor: '#F3E5F5', // Morado claro
    items: [
      { name: 'Ver películas', icon: 'movie' },
      { name: 'Juegos de mesa', icon: 'casino' },
      { name: 'Conciertos', icon: 'music_note' }
    ]
  },
  {
    name: 'Aire Libre',
    icon: 'nature',
    color: '#FF9800',  // Naranja
    lightColor: '#FFF3E0', // Naranja claro
    items: [
      { name: 'Excursionismo', icon: 'hiking' },
      { name: 'Playa', icon: 'beach_access' },
      { name: 'Picnics', icon: 'outdoor_grill' }
    ]
  }
];

}
