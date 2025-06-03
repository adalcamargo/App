import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule, MatChipsModule],
  template: '<router-outlet></router-outlet>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica3';
}
