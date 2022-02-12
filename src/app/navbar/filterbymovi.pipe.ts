import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbymovi'
})
export class FilterbymoviPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
