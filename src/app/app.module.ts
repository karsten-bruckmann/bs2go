import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { RoosterComponent } from './components/rooster/rooster.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RoosterIndexComponent } from './components/rooster-index/rooster-index.component';
import { RoosterSelectorComponent } from './components/rooster-selector/rooster-selector.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RoosterComponent,
    RoosterIndexComponent,
    RoosterSelectorComponent,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
