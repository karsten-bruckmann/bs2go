import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Md5 } from 'ts-md5';

interface Translations {
  de?: string;
}

@Injectable({ providedIn: 'root' })
export class TranslationsService {
  private _updatedTexts$: Subject<string> = new Subject();
  public updatedTexts$ = this._updatedTexts$.asObservable();

  public getTranslation(
    language: keyof Translations,
    original: string
  ): string | undefined {
    const translations: Translations =
      JSON.parse(
        localStorage.getItem(`translation-${Md5.hashStr(original)}`) || 'null'
      ) || {};
    return translations[language];
  }

  public translate(
    language: keyof Translations,
    original: string,
    translation: string | null
  ): void {
    if (!translation) {
      localStorage.removeItem(`translation-${Md5.hashStr(original)}`);
      this._updatedTexts$.next(original);
      return;
    }
    const translations: Translations =
      JSON.parse(
        localStorage.getItem(`translation-${Md5.hashStr(original)}`) || 'null'
      ) || {};
    translations[language] = translation;
    localStorage.setItem(
      `translation-${Md5.hashStr(original)}`,
      JSON.stringify(translations)
    );
    this._updatedTexts$.next(original);
  }

  public export(): Record<string, Translations> {
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
}
