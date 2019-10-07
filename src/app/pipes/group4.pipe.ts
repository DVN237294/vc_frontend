import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'group4'
})
export class Group4Pipe implements PipeTransform {

  transform(array:any[]) {
    return array.reduce((result, item, index) => {
      if(index % 4 == 0)
      {
        result.push([]);
      }
      result[result.length - 1].push(item);
      return result;
    }, []);
  }

}
