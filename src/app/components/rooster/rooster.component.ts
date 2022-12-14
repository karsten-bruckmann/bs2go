import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { combineLatest, filter, map, switchMap } from 'rxjs';
import { RoostersService } from '../../services/roosters.service';
import { StateService } from '../../services/state.service';
import { TranslatableComponent } from '../translatable/translatable.component';
import { RoosterSectionComponent } from './components/rooster-section/rooster-section.component';
import { RoosterSummaryComponent } from './components/rooster-summary/rooster-summary.component';

@Component({
  selector: 'app-rooster',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RoosterSectionComponent,
    RoosterSummaryComponent,
    TranslatableComponent,
  ],
  templateUrl: './rooster.component.html',
  styleUrls: ['./rooster.component.scss'],
})
export class RoosterComponent {
  constructor(
    private roostersService: RoostersService,
    private state: StateService
  ) {}

  public sheet$ = this.state.sheet$;

  public rooster$ = this.state.rooster$.pipe(
    filter((r): r is string => !!r),
    switchMap(rooster => this.roostersService.rooster$(rooster))
  );

  public section$ = combineLatest([this.rooster$, this.sheet$]).pipe(
    map(([rooster, sheet]) =>
      !rooster || !sheet || sheet.type !== 'section'
        ? null
        : rooster.forces
            .find(f => f.name === sheet.force)
            ?.categories.find(c => c.name === sheet.category)
            ?.sections.find(s => s.name === sheet.section)
    )
  );

  public summary$ = combineLatest([this.rooster$, this.sheet$]).pipe(
    map(([rooster, sheet]) =>
      !rooster || !sheet || sheet.type !== 'summary'
        ? null
        : rooster.summaries.find(f => f.name === sheet.summary)
    )
  );
}
