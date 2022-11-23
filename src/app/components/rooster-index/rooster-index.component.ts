import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { filter, firstValueFrom, switchMap } from 'rxjs';
import { RoostersService } from '../../services/roosters.service';
import { StateService } from '../../services/state.service';
import { RoosterIndexForceComponent } from '../rooster-index-force/rooster-index-force.component';
import { RoosterIndexSummaryComponent } from '../rooster-index-summary/rooster-index-summary.component';

@Component({
  selector: 'app-rooster-index',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RoosterIndexForceComponent,
    RoosterIndexSummaryComponent,
  ],
  templateUrl: './rooster-index.component.html',
  styleUrls: ['./rooster-index.component.scss'],
})
export class RoosterIndexComponent {
  constructor(
    private roostersService: RoostersService,
    private state: StateService
  ) {}

  public rooster$ = this.state.rooster$.pipe(
    filter((r): r is string => !!r),
    switchMap(rooster => this.roostersService.rooster$(rooster))
  );

  public async showSection(
    forceName: string,
    categoryName: string,
    sectionName: string
  ): Promise<void> {
    const rooster = await firstValueFrom(this.state.rooster$);
    if (!rooster) {
      return;
    }
    this.state.setSheet({
      type: 'section',
      rooster,
      force: forceName,
      category: categoryName,
      section: sectionName,
    });
  }

  public async showSummary(summaryName: string): Promise<void> {
    const rooster = await firstValueFrom(this.state.rooster$);
    if (!rooster) {
      return;
    }
    this.state.setSheet({
      type: 'summary',
      rooster,
      summary: summaryName,
    });
  }
}
