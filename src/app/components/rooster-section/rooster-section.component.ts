import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section } from '../../models/rooster.model';
import { IonicModule } from '@ionic/angular';
import { RoosterTextItemComponent } from '../rooster-text-item/rooster-text-item.component';
import { RoosterTableComponent } from '../rooster-table/rooster-table.component';

@Component({
  selector: 'app-rooster-section',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RoosterTextItemComponent,
    RoosterTableComponent,
  ],
  templateUrl: './rooster-section.component.html',
  styleUrls: ['./rooster-section.component.scss'],
})
export class RoosterSectionComponent {
  @Input() public section: Section = {
    name: '',
    sections: [],
    tables: [],
    textItems: [],
  };
}
