import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Summary } from '../../models/rooster.model';

@Component({
  selector: 'app-rooster-index-summary',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './rooster-index-summary.component.html',
  styleUrls: ['./rooster-index-summary.component.scss'],
})
export class RoosterIndexSummaryComponent {
  @Input() public summary: Summary = {
    name: '',
    textItems: [],
  };

  @Output() public summarySelected: EventEmitter<string> = new EventEmitter();
}
