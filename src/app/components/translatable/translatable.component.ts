import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { combineLatest, map, Observable, shareReplay, tap } from 'rxjs';
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
    private sanitizer: DomSanitizer,
    private translationService: TranslationsService,
    public state: StateService
  ) {}

  @Input() public set text(html: string) {
    this.original = html;
  }

  @Input() public translateOnClick = true;

  public original = '';

  public translation$?: Observable<
    { original: string; translated: string; safeContent: SafeHtml }[]
  >;

  public editable$ = combineLatest([
    this.state.translationsEditMode$,
    this.translationService.translatable$,
  ]).pipe(map(([editMode, translatable]) => editMode && translatable));

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text']) {
      this.translation$ = this.translationService
        .getTranslation(this.original)
        .pipe(
          map(translations =>
            translations.map(translation => ({
              ...translation,
              safeContent: this.sanitizer.bypassSecurityTrustHtml(
                translation.translated
              ),
            }))
          ),
          tap(console.log),
          shareReplay(1)
        );
    }
  }
  public translate(original: string, translation: string | null | undefined) {
    this.translationService.translate(original, translation || '');
  }
}
