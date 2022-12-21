import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { filter, Subject, takeUntil } from 'rxjs';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-translatable',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './translatable.component.html',
  styleUrls: ['./translatable.component.scss'],
})
export class TranslatableComponent implements OnInit, OnDestroy {
  constructor(
    private sanitizer: DomSanitizer,
    private translationService: TranslationsService
  ) {}

  @Input() public set text(html: string) {
    this.original = html;
    const translation = this.translationService.getTranslation('de', html);
    this.content = this.sanitizer.bypassSecurityTrustHtml(translation || html);
    this.translation = translation || '';
  }

  public original = '';
  public translation = '';
  public content: SafeHtml = '';
  public changed = false;

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.translationService.updatedTexts$
      .pipe(
        takeUntil(this.destroy$),
        filter(text => text === this.original)
      )
      .subscribe(() => {
        const translation = this.translationService.getTranslation(
          'de',
          this.original
        );
        this.content = this.sanitizer.bypassSecurityTrustHtml(
          translation || this.original
        );
        this.translation = translation || '';
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public translate(translation: string | null | undefined) {
    this.translationService.translate('de', this.original, translation || '');
  }
}
