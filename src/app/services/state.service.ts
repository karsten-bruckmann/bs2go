import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UnitSheet {
  type: 'unit';
  roster: string;
  detachment: string;
  unit: string;
}

export interface SummarySheet {
  type: 'summary';
  roster: string;
  summary: string;
}

export type Sheet = UnitSheet | SummarySheet;

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

  private _roster$ = new BehaviorSubject<string | undefined>(
    localStorage.getItem('roster')
      ? JSON.parse(localStorage.getItem('roster') || '')
      : undefined
  );

  public get roster$() {
    return this._roster$.asObservable();
  }

  public setRoster(roster: string) {
    this.setSheet(undefined);
    this._roster$.next(roster);
    localStorage.setItem('roster', JSON.stringify(roster));
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
