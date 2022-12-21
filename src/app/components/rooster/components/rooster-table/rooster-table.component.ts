import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Table } from '../../../../models/rooster.model';
import { TranslatableComponent } from '../../../translatable/translatable.component';

@Component({
  selector: 'rooster-table',
  standalone: true,
  imports: [CommonModule, TranslatableComponent],
  templateUrl: './rooster-table.component.html',
  styleUrls: ['./rooster-table.component.scss'],
})
export class RoosterTableComponent {
  @Input() public table: Table = {
    name: '',
    header: [],
    rows: [],
  };
}
