import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SectionSheet {
  type: 'section';
  force: string;
  category: string;
  section: string;
}

export interface SummarySheet {
  type: 'summary';
  summary: string;
}

export type Sheet = { rooster: string } & (SectionSheet | SummarySheet);

@Injectable({ providedIn: 'root' })
export class StateService {
  private _sheet$ = new BehaviorSubject<Sheet | undefined>(
    localStorage.getItem('sheet')
      ? JSON.parse(localStorage.getItem('sheet') || '')
      : undefined
  );

  public get sheet$() {
    return this._sheet$.asObservable();
  }

  public setSheet(sheet: Sheet | undefined) {
    this._sheet$.next(sheet);
    if (sheet) {
      localStorage.setItem('sheet', JSON.stringify(sheet));
    } else {
      localStorage.removeItem('sheet');
    }
  }

  private _rooster$ = new BehaviorSubject<string | undefined>(
    localStorage.getItem('rooster')
      ? JSON.parse(localStorage.getItem('rooster') || '')
      : undefined
  );

  public get rooster$() {
    return this._rooster$.asObservable();
  }

  public setRooster(rooster: string) {
    this.setSheet(undefined);
    this._rooster$.next(rooster);
    localStorage.setItem('rooster', JSON.stringify(rooster));
  }

  private _translationsEditMode$ = new BehaviorSubject<boolean>(
    localStorage.getItem('translationsEditMode') ? true : false
  );

  public get translationsEditMode$() {
    return this._translationsEditMode$.asObservable();
  }

  public setTranslationsEditMode(enabled: boolean) {
    this._translationsEditMode$.next(enabled);
    if (enabled) {
      localStorage.setItem('translationsEditMode', 'enabled');
    } else {
      localStorage.removeItem('translationsEditMode');
    }
  }
}
