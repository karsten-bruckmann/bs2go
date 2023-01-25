import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { combineLatest, filter, map, switchMap } from 'rxjs';
import { Detachment, Roster, Unit } from '../../../../models/roster.model';
import { RostersService } from '../../../../services/rosters.service';
import { StateService, UnitSheet } from '../../../../services/state.service';
import { TranslatableComponent } from '../../../translatable/translatable.component';

@Component({
  selector: 'sheet-unit',
  standalone: true,
  imports: [CommonModule, IonicModule, TranslatableComponent],
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
})
export class UnitComponent {
  constructor(
    private rostersService: RostersService,
    private state: StateService
  ) {}

  public sheet$ = this.state.sheet$.pipe(
    filter((s): s is UnitSheet => !!s && s.type === 'unit')
  );

  public roster$ = this.state.roster$.pipe(
    filter((r): r is string => !!r),
    switchMap(roster => this.rostersService.roster$(roster)),
    filter((r): r is Roster => !!r)
  );

  public detachment$ = combineLatest([this.roster$, this.sheet$]).pipe(
    map(([roster, sheet]) =>
      roster.detachments.find(d => d.title === sheet.detachment)
    ),
    filter((v): v is Detachment => !!v)
  );

  public unit$ = combineLatest([this.detachment$, this.sheet$]).pipe(
    map(([detachment, sheet]) =>
      detachment.units.find(d => d.title === sheet.unit)
    ),
    filter((v): v is Unit => !!v)
  );
}