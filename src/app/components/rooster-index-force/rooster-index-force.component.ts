import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Force } from '../../models/rooster.model';
import { RoosterIndexCategoryComponent } from '../rooster-index-category/rooster-index-category.component';

@Component({
  selector: 'app-rooster-index-force',
  standalone: true,
  imports: [CommonModule, IonicModule, RoosterIndexCategoryComponent],
  templateUrl: './rooster-index-force.component.html',
  styleUrls: ['./rooster-index-force.component.scss'],
})
export class RoosterIndexForceComponent {
  @Input() public force: Force = {
    name: '',
    categories: [],
  };
  @Output() public sectionSelected: EventEmitter<{
    category: string;
    section: string;
  }> = new EventEmitter();
}
