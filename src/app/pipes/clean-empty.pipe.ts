import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanEmpty',
  standalone: true,
})
export class CleanEmptyPipe implements PipeTransform {
  private readonly ignored = ['-', 'N/A', 'n/a'];

  transform(value: unknown): unknown {
    if (typeof value !== 'string') {
      return value;
    }

    if (this.ignored.includes(value)) {
      return '';
    }

    return value;
  }
}
