import { Injectable } from '@angular/core';
import { filter, from, map, merge, Observable, Subject } from 'rxjs';
import { Md5 } from 'ts-md5';

interface Translations {
  en: string;
  de?: string;
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

  public getTranslation(
    language: keyof Translations,
    original: string
  ): Observable<{ original: string; translated: string }[]> {
    const originalSplit = this.splitText(original);
    return merge(from(originalSplit), this.updatedTexts$).pipe(
      filter(text => originalSplit.includes(text)),
      map(() =>
        originalSplit.map(orig => {
          const translations: Translations =
            JSON.parse(
              localStorage.getItem(`translation-${Md5.hashStr(orig)}`) || 'null'
            ) || {};
          return { translated: translations[language] || orig, original: orig };
        })
      )
    );
  }

  public translate(
    language: keyof Translations,
    original: string,
    translation: string | null
  ): void {
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
