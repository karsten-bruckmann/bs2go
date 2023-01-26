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
  private readonly storageKeys = {
    rooster: 'rooster-v2',
    sheet: 'sheet-v2',
    indexView: 'index-view-v1',
  };

  private _sheet$ = new BehaviorSubject<Sheet | undefined>(
    localStorage.getItem(this.storageKeys.sheet)
      ? JSON.parse(localStorage.getItem(this.storageKeys.sheet) || '')
      : undefined
  );

  public get sheet$() {
    return this._sheet$.asObservable();
  }

  public setSheet(sheet: Sheet | undefined) {
    this._sheet$.next(sheet);
    if (sheet) {
      localStorage.setItem(this.storageKeys.sheet, JSON.stringify(sheet));
    } else {
      localStorage.removeItem(this.storageKeys.sheet);
    }
  }

  private _roster$ = new BehaviorSubject<string | undefined>(
    localStorage.getItem(this.storageKeys.rooster)
      ? JSON.parse(localStorage.getItem(this.storageKeys.rooster) || '')
      : undefined
  );

  public get roster$() {
    return this._roster$.asObservable();
  }

  public setRoster(roster: string) {
    this.setSheet(undefined);
    this._roster$.next(roster);
    localStorage.setItem(this.storageKeys.rooster, JSON.stringify(roster));
  }

  private _indexView$ = new BehaviorSubject<'list' | 'grid'>(
    localStorage.getItem(this.storageKeys.indexView)
      ? (localStorage.getItem(this.storageKeys.indexView) as 'list' | 'grid')
      : 'list'
  );

  public get indexView$() {
    return this._indexView$.asObservable();
  }

  public setIndexView(view: 'list' | 'grid') {
    this._indexView$.next(view);
    localStorage.setItem(this.storageKeys.indexView, view);
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
