import { Injectable } from '@angular/core';
import { IDBPDatabase, openDB } from 'idb';
import {
  filter,
  from,
  map,
  Observable,
  startWith,
  Subject,
  switchMap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnitImagesService {
  private get db(): Promise<IDBPDatabase> {
    return openDB('images', 1, {
      upgrade(db) {
        db.createObjectStore('units');
      },
    });
  }

  private changed$ = new Subject<string>();

  public getUnitImage$(name: string): Observable<string | null> {
    return this.changed$.pipe(
      filter(c => c === name),
      startWith(name),
      switchMap(n =>
        from(
          this.db.then(db => {
            return db.get<string>('units', `${n}`);
          })
        )
      ),
      map((d: string | undefined): string | null => d || null)
    );
  }

  public async setUnitImage(name: string, image: File): Promise<void> {
    const data = await this.convertBase64(image);
    const db = await this.db;
    await db.put('units', data, name);
    this.changed$.next(name);
  }

  public async deleteUnitImage(name: string): Promise<void> {
    const db = await this.db;
    await db.delete('units', name);
    this.changed$.next(name);
  }

  private async convertBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        const result = fileReader.result;
        if (!result) {
          reject();
          return;
        }
        resolve(result.toString());
      };

      fileReader.onerror = error => {
        reject(error);
      };
    });
  }
}
