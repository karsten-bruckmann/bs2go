import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section } from '../../models/rooster.model';
import { IonicModule } from '@ionic/angular';

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
