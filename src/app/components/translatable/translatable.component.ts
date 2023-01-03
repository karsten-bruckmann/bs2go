import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
    private sanitizer: DomSanitizer,
    private translationService: TranslationsService,
    public state: StateService
  ) {}

  private trimChars = '[. ,:]';

  @Input() public set text(html: string) {
    return;
  }

  @Input() public translateOnClick = true;

  // public trimmedStart = '';
  // public original = '';
  // public trimmedEnd = '';

  public translation$?: Observable<
    {
      original: string;
      translated: string;
      safeContent: SafeHtml;
      editable: boolean;
    }[]
  >;

  public editable$ = combineLatest([
    this.state.translationsEditMode$,
    this.translationService.translatable$,
  ]).pipe(map(([editMode, translatable]) => editMode && translatable));

  ngOnChanges(changes: SimpleChanges): void {
    const textChange = changes['text'];
    if (textChange) {
      const regExpString = `^(?<trimmedStart>${this.trimChars}*)(?<original>.*?)(?<trimmedEnd>${this.trimChars}*)$`;
      const matchGroups = textChange.currentValue.match(
        new RegExp(regExpString)
      )?.groups;
      let trimmedStart = '';
      let original = '';
      let trimmedEnd = '';
      if (matchGroups) {
        // const { trimmedStart, original, trimmedEnd } = matchGroups;
        trimmedStart = matchGroups.trimmedStart;
        original = matchGroups.original;
        trimmedEnd = matchGroups.trimmedEnd;
      } else {
        trimmedStart = '';
        original = textChange.currentValue;
        trimmedEnd = '';
      }
      this.translation$ = this.translationService.getTranslation(original).pipe(
        map(translations =>
          translations.map(translation => ({
            ...translation,
            safeContent: this.sanitizer.bypassSecurityTrustHtml(
              trimmedStart + translation.translated + trimmedEnd
            ),
            editable: !!original.match(/[a-zA-Z]/),
          }))
        ),
        shareReplay(1)
      );
    }
  }

  public translate(original: string, translation: string | null | undefined) {
    this.translationService.translate(original, translation || '');
  }
}
