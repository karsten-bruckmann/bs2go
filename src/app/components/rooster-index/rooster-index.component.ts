import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { filter, firstValueFrom, switchMap } from 'rxjs';
import { RoostersService } from '../../services/roosters.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-rooster-index',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './rooster-index.component.html',
  styleUrls: ['./rooster-index.component.scss'],
})
export class RoosterIndexComponent implements AfterViewInit {
  constructor(
    private roostersService: RoostersService,
    private state: StateService
  ) {}

  public rooster$ = this.state.rooster$.pipe(
    filter((r): r is string => !!r),
    switchMap(rooster => this.roostersService.rooster$(rooster))
  );

  @ViewChild('modal') public modal?: HTMLIonModalElement;

  public open(): void {
    this.modal?.present();
  }

  public async ngAfterViewInit(): Promise<void> {
    const rooster = await firstValueFrom(this.state.rooster$);
    const sheet = await firstValueFrom(this.state.sheet$);
    if (!!rooster && !sheet) {
      this.modal?.present();
    }
  }

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
