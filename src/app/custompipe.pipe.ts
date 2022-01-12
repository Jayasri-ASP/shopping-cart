import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {
  pval: string = ''
  transform(value: any, ...args: unknown[]): any {
    this.pval = value.split('').reverse().join('');
    return this.pval;
  }

}
