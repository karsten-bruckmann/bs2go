import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslatableHtmlComponent } from '../../../translatable-html/translatable-html.component';
import { TranslatableComponent } from '../../../translatable/translatable.component';

@Component({
  selector: 'rooster-text-item',
  standalone: true,
  imports: [CommonModule, TranslatableComponent, TranslatableHtmlComponent],
  templateUrl: './rooster-text-item.component.html',
  styleUrls: ['./rooster-text-item.component.scss'],
})
export class RoosterTextItemComponent {
  @Input() public textItem = '';
}
