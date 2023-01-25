import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  firstValueFrom,
  map,
  Observable,
  startWith,
  Subject,
  switchMap,
} from 'rxjs';
import { Md5 } from 'ts-md5';

enum Language {
  en = 'en',
  de = 'de',
  fr = 'fr',
  es = 'es',
}

@Injectable({ providedIn: 'root' })
export class TranslationsService {
  private _updatedTexts$: Subject<string> = new Subject();
  public updatedTexts$ = this._updatedTexts$.asObservable();

  public readonly languages: Record<Language, { flag: string; name: string }> =
    {
      en: { flag: '🇬🇧', name: 'English' },
      de: { flag: '🇩🇪', name: 'Deutsch' },
      fr: { flag: '🇫🇷', name: 'Français' },
      es: { flag: '🇪🇸', name: 'Español' },
    };

  public readonly selectedLanguage$: BehaviorSubject<Language> =
    new BehaviorSubject((localStorage.getItem('language') || 'de') as Language);

  public readonly translatable$: Observable<boolean> =
    this.selectedLanguage$.pipe(map(language => 'en' !== language));

  public setLanguage(language: Language): void {
    localStorage.setItem('language', language);
    this.selectedLanguage$.next(language);
  }

  public getTranslation(original: string): Observable<string> {
    const md5 = Md5.hashStr(original);
    return this.selectedLanguage$.pipe(
      switchMap(language =>
        this.updatedTexts$.pipe(
          startWith(md5),
          filter(hash => hash === md5),
          map(
            () =>
              localStorage.getItem(`translation-${language}-${md5}`) || original
          )
        )
      )
    );
  }

  public async translate(
    original: string,
    translation: string | null,
    translationLanguage?: Language
  ): Promise<void> {
    const md5 = Md5.hashStr(original);

    const language =
      translationLanguage || (await firstValueFrom(this.selectedLanguage$));

    if (!translation || original === translation) {
      localStorage.removeItem(`translation-${language}-${md5}`);
      this._updatedTexts$.next(md5);
      return;
    }

    localStorage.setItem(`translation-${language}-${md5}`, translation);
    this._updatedTexts$.next(md5);
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
    const imported: Record<string, string> = JSON.parse(importedJson);
    Object.entries(imported).forEach(([key, value]) => {
      const md5 = key.match(/[0-9a-f]{32}$/)?.[0];
      if (!md5) {
        return;
      }
      localStorage.setItem(key, value);
      this._updatedTexts$.next(md5);
    });
  }

  private getAllTranslations(): Record<string, string> {
    const all: Record<string, string> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) {
        continue;
      }
      if (!key.match(/^translation-(en|de|fr|es)-[0-9a-f]{32}/)) {
        continue;
      }

      all[key] = localStorage.getItem(key) || '';
    }
    return all;
  }
}
