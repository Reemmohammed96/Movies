import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortLine'
})
export class ShortLinePipe implements PipeTransform {

  transform(overview:string,size:number):any {
    return overview.split(" ").slice(0,size).join(' ');
  }

}
