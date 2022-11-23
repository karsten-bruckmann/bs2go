import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Section } from '../../models/rooster.model';

@Component({
  selector: 'app-rooster-index-section',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './rooster-index-section.component.html',
  styleUrls: ['./rooster-index-section.component.scss'],
})
export class RoosterIndexSectionComponent {
  @Input() public section: Section = {
    name: '',
    sections: [],
    tables: [],
    textItems: [],
  };
}
