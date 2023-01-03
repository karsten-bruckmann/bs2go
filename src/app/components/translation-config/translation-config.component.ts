import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActionSheetController, IonicModule } from '@ionic/angular';
import { map } from 'rxjs';
import { StateService } from '../../services/state.service';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-translation-config',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './translation-config.component.html',
  styleUrls: ['./translation-config.component.scss'],
})
export class TranslationConfigComponent {
  constructor(
    private translationsService: TranslationsService,
    public state: StateService,
    private actionSheetCtrl: ActionSheetController
  ) {}

  public flags = this.translationsService.languages;
  public selectedFlag$ = this.translationsService.selectedLanguage$.pipe(
    map(language => this.flags[language].flag)
  );

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

  public exportTranslations(): void {
    this.translationsService.export();
  }

  public async importTranslations(event: Event): Promise<void> {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (!target || !files) {
      return;
    }
    const file: File = files[0];
    if (!file) {
      return;
    }
    this.translationsService.import(file);
  }
}
