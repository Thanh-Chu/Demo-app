import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormation'
})
export class CurrencyFormationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
