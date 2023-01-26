import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { filter, firstValueFrom, switchMap } from 'rxjs';
import { RostersService } from '../../services/rosters.service';
import { StateService } from '../../services/state.service';
import { TranslatableComponent } from '../translatable/translatable.component';
import { UnitImageComponent } from '../unit-image/unit-image.component';

@Component({
  selector: 'app-roster-index',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    TranslatableComponent,
    UnitImageComponent,
  ],
  templateUrl: './roster-index.component.html',
  styleUrls: ['./roster-index.component.scss'],
})
export class RosterIndexComponent implements AfterViewInit {
  constructor(
    private rostersService: RostersService,
    private state: StateService
  ) {}

  public roster$ = this.state.roster$.pipe(
    filter((r): r is string => !!r),
    switchMap(roster => this.rostersService.roster$(roster))
  );

  @ViewChild('modal') public modal?: HTMLIonModalElement;

  public view$ = this.state.indexView$;

  public open(): void {
    this.modal?.present();
  }

  public async ngAfterViewInit(): Promise<void> {
    const roster = await firstValueFrom(this.state.roster$);
    const sheet = await firstValueFrom(this.state.sheet$);
    if (!!roster && !sheet) {
      this.modal?.present();
    }
  }

  public async showSection(
    rosterName: string,
    detachmentName: string,
    unitName: string
  ): Promise<void> {
    const roster = await firstValueFrom(this.state.roster$);
    if (!roster) {
      return;
    }
    this.state.setSheet({
      type: 'unit',
      roster: rosterName,
      detachment: detachmentName,
      unit: unitName,
    });
  }

  public async showSummary(summaryName: string): Promise<void> {
    const roster = await firstValueFrom(this.state.roster$);
    if (!roster) {
      return;
    }
    this.state.setSheet({
      type: 'summary',
      roster,
      summary: summaryName,
    });
  }

  public setView(view: 'list' | 'grid'): void {
    this.state.setIndexView(view);
  }
}
