import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslatableComponent } from '../translatable/translatable.component';

@Component({
  selector: 'app-translatable-html',
  standalone: true,
  imports: [CommonModule, TranslatableComponent],
  templateUrl: './translatable-html.component.html',
  styleUrls: ['./translatable-html.component.scss'],
})
export class TranslatableHtmlComponent {
  constructor(private sanitizer: DomSanitizer) {}

  public childNodes: string[] = [];
  public textNode?: string;
  public splitNodes: string[] = [];
  public htmlNode?: {
    tagName: HTMLElement['tagName'];
    splitNodes: string[];
    classes: string;
  };

  @Input() public set text(html: string) {
    const parser = new DOMParser();
    const childNodes = parser.parseFromString(html, 'text/html').body
      .childNodes;
    if (childNodes.length === 1) {
      const node = childNodes[0];
      if ((node as HTMLElement).tagName) {
        this.htmlNode = {
          tagName: (node as HTMLElement).tagName,
          splitNodes: (node as HTMLElement).innerHTML.split(/(,)/),
          classes: (node as HTMLElement).classList.value,
        };
      } else {
        const split = html.split(/(,)/);
        if (split.length > 1) {
          this.splitNodes = split;
        } else {
          this.textNode = html;
        }
      }
    } else {
      this.childNodes = [];
      childNodes.forEach(node => {
        this.childNodes.push(
          (node as HTMLElement).outerHTML || (node as Text).data
        );
      });
    }
  }

  public isTranslatable(text: string): boolean {
    return text.match(/[a-zA-Z0-9]/) !== null;
  }
}
