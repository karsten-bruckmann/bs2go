import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { combineLatest, filter, map, switchMap } from 'rxjs';
import { RoostersService } from '../../services/roosters.service';
import { StateService } from '../../services/state.service';
import { RoosterIndexForceComponent } from '../rooster-index-force/rooster-index-force.component';
import { RoosterSectionComponent } from '../rooster-section/rooster-section.component';
import { RoosterSummaryComponent } from '../rooster-summary/rooster-summary.component';

@Component({
  selector: 'app-rooster',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RoosterIndexForceComponent,
    RoosterSectionComponent,
    RoosterSummaryComponent,
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
