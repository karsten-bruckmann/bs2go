import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, shareReplay } from 'rxjs';
import { Rooster } from '../models/rooster.model';
import { BattleScribeParserService } from './battle-scribe-parser.service';

@Injectable({ providedIn: 'root' })
export class RoostersService {
  constructor(private parser: BattleScribeParserService) {}

  private _roosters$: BehaviorSubject<Rooster[]> = new BehaviorSubject(
    this.readFromStorage()
  );

  public readonly roosters$: Observable<Rooster[]> = this._roosters$.pipe(
    shareReplay({ bufferSize: 1, refCount: true })
  );

  public readonly titles$: Observable<string[]> = this.roosters$.pipe(
    map((roosters) => roosters.map((rooster) => rooster.title))
  );

  public rooster$(title: string): Observable<Rooster | undefined> {
    return this.roosters$.pipe(
      map((files) => files.find((file) => file.title === title))
    );
  }

  public async addFromFile(file: File): Promise<Rooster> {
    const roosters = this._roosters$.value;
    const content = await file.text();
    const rooster = this.parser.parse(content);
    roosters.push(rooster);
    this._roosters$.next(roosters);
    localStorage.setItem('roosters', JSON.stringify(roosters));
    return rooster;
  }

  public delete(title: string): void {
    const files = this._roosters$.value.filter((file) => file.title !== title);
    this._roosters$.next(files);
    localStorage.setItem('roosters', JSON.stringify(files));
  }

  private readFromStorage(): Rooster[] {
    return JSON.parse(localStorage.getItem('roosters') || '[]') || [];
  }
}
