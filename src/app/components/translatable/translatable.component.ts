import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { map, Observable, shareReplay, tap } from 'rxjs';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-translatable',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './translatable.component.html',
  styleUrls: ['./translatable.component.scss'],
})
export class TranslatableComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private translationService: TranslationsService
  ) {}

  @Input() public set text(html: string) {
    this.original = html;
  }

  public original = '';

  public translation$?: Observable<
    { original: string; translated: string; safeContent: SafeHtml }[]
  >;

  ngOnInit(): void {
    this.translation$ = this.translationService
      .getTranslation('de', this.original)
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
  public translate(original: string, translation: string | null | undefined) {
    this.translationService.translate('de', original, translation || '');
  }
}
