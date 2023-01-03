import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  firstValueFrom,
  from,
  map,
  merge,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { Md5 } from 'ts-md5';

interface Translations {
  en: string;
  de?: string;
  fr?: string;
  es?: string;
}

@Injectable({ providedIn: 'root' })
export class TranslationsService {
  private _updatedTexts$: Subject<string> = new Subject();
  public updatedTexts$ = this._updatedTexts$.asObservable();

  private readonly braces: { start: string; end: string }[] = [
    { start: '[', end: ']' },
    { start: '(', end: ')' },
    { start: '{', end: '}' },
  ];

  public readonly languages: Record<
    keyof Translations,
    { flag: string; name: string }
  > = {
    en: { flag: '🇬🇧', name: 'English' },
    de: { flag: '🇩🇪', name: 'Deutsch' },
    fr: { flag: '🇫🇷', name: 'Français' },
    es: { flag: '🇪🇸', name: 'Español' },
  };

  public readonly selectedLanguage$: BehaviorSubject<keyof Translations> =
    new BehaviorSubject(localStorage.getItem('language') as keyof Translations);

  public readonly translatable$: Observable<boolean> =
    this.selectedLanguage$.pipe(map(language => 'en' !== language));

  public setLanguage(language: keyof Translations): void {
    localStorage.setItem('language', language);
    this.selectedLanguage$.next(language);
  }

  public getTranslation(
    original: string
  ): Observable<{ original: string; translated: string }[]> {
    const originalSplit = this.splitText(original);
    return this.selectedLanguage$.pipe(
      switchMap(language =>
        merge(from(originalSplit), this.updatedTexts$).pipe(
          filter(text => originalSplit.includes(text)),
          map(() =>
            originalSplit.map(orig => {
              const translations: Translations =
                JSON.parse(
                  localStorage.getItem(`translation-${Md5.hashStr(orig)}`) ||
                    'null'
                ) || {};
              return {
                translated: translations[language] || orig,
                original: orig,
              };
            })
          )
        )
      )
    );
  }

  public async translate(
    original: string,
    translation: string | null,
    translationLanguage?: keyof Translations
  ): Promise<void> {
    const translatable = await firstValueFrom(this.translatable$);
    if (!translatable) {
      return;
    }

    const language =
      translationLanguage || (await firstValueFrom(this.selectedLanguage$));

    if (!translation || original === translation) {
      localStorage.removeItem(`translation-${Md5.hashStr(original)}`);
      this._updatedTexts$.next(original);
      return;
    }
    const translations: Translations = JSON.parse(
      localStorage.getItem(`translation-${Md5.hashStr(original)}`) || 'null'
    ) || {
      en: original,
    };
    translations[language] = translation;
    localStorage.setItem(
      `translation-${Md5.hashStr(original)}`,
      JSON.stringify(translations)
    );
    this._updatedTexts$.next(original);
  }

  public export(): void {
    const data = this.getAllTranslations();
    const a = document.createElement('a');
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: 'octet/stream' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'translations.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  public async import(file: File): Promise<void> {
    const importedJson = await file.text();
    const imported: Record<string, Translations> = JSON.parse(importedJson);
    Object.entries(imported).forEach(([, value]) => {
      const original = value.en;
      Object.entries(value).forEach(([language, translation]) => {
        this.translate(original, translation, language as keyof Translations);
      });
    });
  }

  private getAllTranslations(): Record<string, Translations> {
    return new Array(localStorage.length)
      .fill(null)
      .map((_, i) => localStorage.key(i))
      .filter((v): v is string => !!v)
      .filter(v => v.match(/^translation-[0-9a-f]{32}/))
      .map(v => {
        const parsed = JSON.parse(localStorage.getItem(v) || 'null');
        if (!parsed) {
          return null;
        }
        return { [v]: parsed as Translations };
      })
      .filter((v): v is Record<string, Translations> => !!v)
      .reduce<Record<string, Translations>>((acc, v) => ({ ...acc, ...v }), {});
  }

  private splitText(text: string): string[] {
    let result: string[] = [text];
    for (const brace of this.braces) {
      result = result
        .map(text =>
          text.split(
            new RegExp(`(\\${brace.start}[^\\${brace.end}]*\\${brace.end})`)
          )
        )
        .flat()
        .map(v => v.trim())
        .filter(v => !!v);
    }
    return result;
  }
}
