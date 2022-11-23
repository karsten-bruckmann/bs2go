import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Summary } from '../../../../models/rooster.model';
import { RoosterTextItemComponent } from '../rooster-text-item/rooster-text-item.component';

@Component({
  selector: 'rooster-summary',
  standalone: true,
  imports: [CommonModule, IonicModule, RoosterTextItemComponent],
  templateUrl: './rooster-summary.component.html',
  styleUrls: ['./rooster-summary.component.scss'],
})
export class RoosterSummaryComponent {
  @Input() public summary: Summary = {
    name: '',
    textItems: [],
  };
}
