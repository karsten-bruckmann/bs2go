import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { combineLatest, map, Observable, shareReplay } from 'rxjs';
import { StateService } from '../../services/state.service';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-translatable',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './translatable.component.html',
  styleUrls: ['./translatable.component.scss'],
})
export class TranslatableComponent implements OnChanges {
  constructor(
    private translationService: TranslationsService,
    public state: StateService
  ) {}

  @Input() public set text(text: string) {
    this.original = text;
    return;
  }

  @Input() public translateOnClick = true;

  public original = '';

  public translation$?: Observable<string>;

  public editable$ = combineLatest([
    this.state.translationsEditMode$,
    this.translationService.translatable$,
  ]).pipe(map(([editMode, translatable]) => editMode && translatable));

  ngOnChanges(changes: SimpleChanges): void {
    const textChange = changes['text'];
    if (textChange) {
      this.translation$ = this.translationService
        .getTranslation(textChange.currentValue)
        .pipe(shareReplay(1));
    }
  }

  public translate(original: string, translation: string | null | undefined) {
    this.translationService.translate(original, translation || '');
  }
}
