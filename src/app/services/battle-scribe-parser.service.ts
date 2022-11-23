import { Injectable } from '@angular/core';
import {
  Category,
  Force,
  Rooster,
  Section,
  Table,
} from '../models/rooster.model';

@Injectable({ providedIn: 'root' })
export class BattleScribeParserService {
  public parse(html: string): Rooster {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    console.log(doc.body);

    return {
      title: this.getTitle(doc),
      forces: this.getForces(doc),
    };
  }

  private getTitle(doc: Document): string {
    return this.cleanText(
      doc.querySelector('body.battlescribe > div.battlescribe > h1')
        ?.textContent || ''
    );
  }

  private getForces(doc: Document): Force[] {
    const forces: Force[] = [];
    doc
      .querySelectorAll('body.battlescribe > div.battlescribe > ul > li.force')
      .forEach((node) => {
        const force: Force = {
          name: this.cleanText(
            node.querySelector(':scope > h2')?.textContent || ''
          ),
          categories: this.getCategories(node),
        };
        forces.push(force);
      });
    return forces;
  }

  private getCategories(forceNode: Element): Category[] {
    const categories: Category[] = [];
    forceNode.querySelectorAll(':scope > ul li.category').forEach((node) => {
      const category: Category = {
        name: this.cleanText(node.querySelector('h3')?.textContent || ''),
        sections: this.getSections(node),
      };
      categories.push(category);
    });
    return categories;
  }

  private getSections(categoryNode: Element): Section[] {
    const textItems: Section[] = [];
    categoryNode.querySelectorAll(':scope > ul > li').forEach((node) => {
      textItems.push({
        name: this.cleanText(node.querySelector('h4')?.textContent || ''),
        sections: this.getSections(node),
        textItems: this.getTextItems(node),
        tables: this.getTables(node),
      });
    });
    return textItems;
  }

  private getTextItems(sectionNode: Element): string[] {
    const textItems: string[] = [];
    sectionNode.querySelectorAll(':scope > p').forEach((node) => {
      textItems.push(node.innerHTML);
    });
    return textItems;
  }

  private getTables(sectionNode: Element): Table[] {
    const tables: Table[] = [];
    sectionNode.querySelectorAll(':scope > table').forEach((node) => {
      const name = this.cleanText(node.querySelector('th')?.textContent || '');
      tables.push({
        name,
        header: this.getTableHeader(node),
        rows: this.getTableRows(node),
      });
    });
    return tables;
  }

  private getTableHeader(tableNode: Element): string[] {
    const header: string[] = [];
    tableNode.querySelectorAll('th').forEach((node) => {
      header.push(this.cleanText(node.textContent || ''));
    });
    return header;
  }

  private getTableRows(tableNode: Element): string[][] {
    const rows: string[][] = [];
    tableNode.querySelectorAll('tr').forEach((rowNode) => {
      const row: string[] = [];
      rowNode.querySelectorAll('td').forEach((cellNode) => {
        row.push(this.cleanText(cellNode.textContent || ''));
      });
      if (row.length > 0) {
        rows.push(row);
      }
    });
    return rows;
  }

  private cleanText(text: string): string {
    let cleaned = text.trim().replaceAll('\n', ' ');
    while (cleaned.includes('  ')) {
      cleaned = cleaned.replaceAll('  ', ' ');
    }
    return cleaned;
  }
}
