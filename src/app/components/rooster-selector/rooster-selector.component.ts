import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { Observable, ReplaySubject } from 'rxjs';
import { RoostersService } from '../../services/roosters.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-rooster-selector',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './rooster-selector.component.html',
  styleUrls: ['./rooster-selector.component.scss'],
})
export class RoosterSelectorComponent {
  constructor(
    private roostersService: RoostersService,
    private state: StateService,
    private modalController: ModalController
  ) {}

  public selectedRooster$: ReplaySubject<string> = new ReplaySubject(1);

  @Output() public roosterSelected: Observable<string> =
    this.selectedRooster$.asObservable();

  public roosterTitles$ = this.roostersService.titles$;

  public async saveFile(event: Event): Promise<void> {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (!target || !files) {
      return;
    }
    const file: File = files[0];
    if (!file) {
      return;
    }
    const rooster = await this.roostersService.addFromFile(file);
    this.selectRooster(rooster.title);
  }

  public deleteRooster(title: string): void {
    this.roostersService.delete(title);
  }

  public selectRooster(title: string): void {
    this.selectedRooster$.next(title);
    this.state.setRooster(title);
    this.modalController.dismiss();
  }
}
