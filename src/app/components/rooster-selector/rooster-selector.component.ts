import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Output, ViewChild } from '@angular/core';
import {
  ActionSheetController,
  IonicModule,
  ModalController,
} from '@ionic/angular';
import { firstValueFrom, map, Observable, ReplaySubject } from 'rxjs';
import { RoostersService } from '../../services/roosters.service';
import { StateService } from '../../services/state.service';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-rooster-selector',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './rooster-selector.component.html',
  styleUrls: ['./rooster-selector.component.scss'],
})
export class RoosterSelectorComponent implements AfterViewInit {
  constructor(
    private roostersService: RoostersService,
    public state: StateService,
    private modalController: ModalController,
    private translationsService: TranslationsService,
    private actionSheetCtrl: ActionSheetController
  ) {}

  public roosterTitles$ = this.roostersService.titles$;
  public selectedRooster$: ReplaySubject<string> = new ReplaySubject(1);
  public flags = this.translationsService.languages;
  public selectedFlag$ = this.translationsService.selectedLanguage$.pipe(
    map(language => this.flags[language].flag)
  );

  @Output() public roosterSelected: Observable<string> =
    this.selectedRooster$.asObservable();

  @ViewChild('modal') public modal?: HTMLIonModalElement;

  public async ngAfterViewInit(): Promise<void> {
    if (!this.modal) {
      return;
    }
    const rooster = await firstValueFrom(this.state.rooster$);
    if (!rooster) {
      this.modal.present();
    }
  }

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

  public async selectLanguage(): Promise<void> {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Sprache wählen',
      buttons: Object.keys(this.flags).map(flag => ({
        text:
          this.flags[flag as keyof typeof this.flags].flag +
          ' ' +
          this.flags[flag as keyof typeof this.flags].name,
        handler: () => {
          this.translationsService.setLanguage(flag as keyof typeof this.flags);
        },
      })),
    });

    actionSheet.present();
  }
}
