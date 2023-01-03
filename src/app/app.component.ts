import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { IonicModule } from '@ionic/angular';
import { filter } from 'rxjs';
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
export class AppComponent {
  constructor(updates: SwUpdate) {
    updates.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
      )
      .subscribe(() => {
        if (confirm('Neue App-Version verfügbar. Jetzt neu laden?')) {
          updates.activateUpdate().then(() => document.location.reload());
        }
      });
  }
}
