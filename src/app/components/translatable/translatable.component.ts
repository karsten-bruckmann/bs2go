import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  shareReplay,
} from 'rxjs';
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
    public state: StateService,
    private domSanitizer: DomSanitizer
  ) {}

  @Input() public set text(text: string) {
    this.original = text;
    this.hasTextChars$.next(!!text.match('[a-zA-Z]+'));
    return;
  }

  @Input() public translateOnClick = true;

  public original = '';

  public translation$?: Observable<string>;

  private hasTextChars$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public editable$ = combineLatest([
    this.state.translationsEditMode$,
    this.translationService.translatable$,
    this.hasTextChars$,
  ]).pipe(
    map(
      ([editMode, translatable, hasTextChars]) =>
        editMode && translatable && hasTextChars
    )
  );

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

  public listify(text: string): SafeHtml {
    let beautified = text;
    [...text.matchAll(/(?:(?:^|\n)(?:- [^\n]+(?:\n|$)*)+)/gm)].forEach(
      match => {
        beautified = beautified.replace(
          match[0],
          `<ul>${match[0].replaceAll(
            /(?:^|\n)- (.*)(?:\n|$)/gm,
            '<li>$1</li>'
          )}</ul>`
        );
      }
    );
    return this.domSanitizer.bypassSecurityTrustHtml(beautified);
  }
}
