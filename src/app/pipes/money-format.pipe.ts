import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyFormat',
  standalone: true
})
export class MoneyFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    const parts = value.split('-');

    if (parts.length === 1) {
      const formattedFirstPart = `$${parts[0]} million`;
      return formattedFirstPart;
    }

    if (parts.length === 2) {
      const formattedFirstPart = `$${parts[0]}-${parts[1]} million`;
      return formattedFirstPart;
    }

    return value;
  }

}
