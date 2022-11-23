import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RoosterIndexComponent } from './components/rooster-index/rooster-index.component';
import { RoosterSelectorComponent } from './components/rooster-selector/rooster-selector.component';
import { RoosterComponent } from './components/rooster/rooster.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RoosterComponent,
    RoosterIndexComponent,
    RoosterSelectorComponent,
  ],
})
export class AppComponent {}
