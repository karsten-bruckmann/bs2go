import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { filter, switchMap } from 'rxjs';
import { RostersService } from '../../services/rosters.service';
import { StateService } from '../../services/state.service';
import { UnitComponent } from './components/unit/unit.component';

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [CommonModule, IonicModule, UnitComponent],
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
})
export class RosterComponent {
  constructor(
    private rostersService: RostersService,
    private state: StateService
  ) {}

  public sheet$ = this.state.sheet$;

  public roster$ = this.state.roster$.pipe(
    filter((r): r is string => !!r),
    switchMap(roster => this.rostersService.roster$(roster))
  );
}
