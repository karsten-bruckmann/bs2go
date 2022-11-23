import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category, Section } from '../../models/rooster.model';
import { IonicModule } from '@ionic/angular';
import { RoosterIndexSectionComponent } from '../rooster-index-section/rooster-index-section.component';

@Component({
  selector: 'app-rooster-index-category',
  standalone: true,
  imports: [CommonModule, IonicModule, RoosterIndexSectionComponent],
  templateUrl: './rooster-index-category.component.html',
  styleUrls: ['./rooster-index-category.component.scss'],
})
export class RoosterIndexCategoryComponent {
  @Input() public category: Category = {
    name: '',
    sections: [],
  };
  @Output() public sectionSelected: EventEmitter<string> = new EventEmitter();
}
