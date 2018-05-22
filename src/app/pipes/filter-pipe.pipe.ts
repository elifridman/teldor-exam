import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, filterStr: string, filterBy: string): any {
    if(filterStr === ''){
      return value;
    }
    const filteredArray = [];
    let strLength = filterStr.length;
    for( const photoObj of value){
      if(photoObj[filterBy].substr(0, strLength).toLowerCase() === filterStr.toLowerCase()){
        filteredArray.push(photoObj)
      }
    }
    return filteredArray;

  }

}
