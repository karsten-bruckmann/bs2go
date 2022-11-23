import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'rooster-text-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooster-text-item.component.html',
  styleUrls: ['./rooster-text-item.component.scss'],
})
export class RoosterTextItemComponent {
  constructor(private sanitizer: DomSanitizer) {}

  @Input() public set textItem(html: string) {
    this.content = this.sanitizer.bypassSecurityTrustHtml(html);
  }

  public content: SafeHtml = '';
}
