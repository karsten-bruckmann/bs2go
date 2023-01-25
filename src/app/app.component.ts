import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { IonicModule } from '@ionic/angular';
import { filter } from 'rxjs';
import { RosterIndexComponent } from './components/roster-index/roster-index.component';
import { RosterSelectorComponent } from './components/roster-selector/roster-selector.component';
import { RosterComponent } from './components/sheet/sheet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RosterComponent,
    RosterIndexComponent,
    RosterSelectorComponent,
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
