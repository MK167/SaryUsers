import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../../Models/Heroes';

@Pipe({
  name: 'filteration'
})
export class FilterationPipe implements PipeTransform {

  transform(Heroes: Heroes[], searchValue: string): Heroes[] {
    if(!Heroes || !searchValue) {
      return Heroes;
    }
    return Heroes.filter((res)=>{
      res.Company.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      res.Countery.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      res.Date.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      res.Email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      res.Name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      res.Phone.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    });
  }

}
