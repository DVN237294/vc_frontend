import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lockFilter'
})
export class LockFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
