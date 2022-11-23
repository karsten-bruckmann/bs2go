import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

export interface SectionSheet {
  type: 'section';
  rooster: string;
  force: string;
  category: string;
  section: string;
}

export interface SummarySheet {
  type: 'summary';
  rooster: string;
  summary: string;
}

export type Sheet = SectionSheet | SummarySheet;

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
    localStorage.setItem('sheet', JSON.stringify(sheet));
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
}
