import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, shareReplay } from 'rxjs';
import Parser from '../libs/rosz2js/Parser';
import { Roster } from '../models/roster.model';
import { RosterAdapterService } from './roster-adapter.service';

@Injectable({ providedIn: 'root' })
export class RostersService {
  constructor(private adapter: RosterAdapterService) {}

  private readonly storageKey = 'roosters-v2';

  private _rosters$: BehaviorSubject<Roster[]> = new BehaviorSubject(
    this.readFromStorage()
  );

  public readonly rosters$: Observable<Roster[]> = this._rosters$.pipe(
    shareReplay({ bufferSize: 1, refCount: true })
  );

  public readonly titles$: Observable<string[]> = this.rosters$.pipe(
    map(rosters => rosters.map(roster => roster.title))
  );

  public roster$(title: string): Observable<Roster | undefined> {
    return this.rosters$.pipe(
      map(files => files.find(file => file.title === title))
    );
  }

  public async addFromFile(file: File): Promise<Roster> {
    const rosters = this._rosters$.value;
    const content = file;

    const bsRoster = await Parser.parse(content);
    const roster = this.adapter.toRoster(bsRoster);

    rosters.push(roster);
    this._rosters$.next(rosters);
    localStorage.setItem(this.storageKey, JSON.stringify(rosters));
    return roster;
  }

  public delete(title: string): void {
    const files = this._rosters$.value.filter(file => file.title !== title);
    this._rosters$.next(files);
    localStorage.setItem(this.storageKey, JSON.stringify(files));
  }

  private readFromStorage(): Roster[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]') || [];
  }
}
