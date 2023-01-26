import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BehaviorSubject, NEVER, Observable, switchMap } from 'rxjs';
import { UnitImagesService } from '../../services/unit-images.service';

@Component({
  selector: 'app-unit-image',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './unit-image.component.html',
  styleUrls: ['./unit-image.component.scss'],
})
export class UnitImageComponent {
  constructor(private imagesService: UnitImagesService) {}

  @Input() editable = false;
  @Input() public set unitName(name: string) {
    this.name$.next(name);
  }

  public name$ = new BehaviorSubject<string | null>(null);
  public data$: Observable<string | null> = this.name$.pipe(
    switchMap(name => (name ? this.imagesService.getUnitImage$(name) : NEVER))
  );

  public async save(event: Event): Promise<void> {
    const name = this.name$.value;
    if (!name) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const file = (event as any).target.files[0];
    this.imagesService.setUnitImage(name, file);
  }

  public delete(): void {
    const name = this.name$.value;
    if (!name) {
      return;
    }
    if (!this.name$.value) {
      return;
    }
    this.imagesService.deleteUnitImage(name);
  }
}
