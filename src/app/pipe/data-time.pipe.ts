import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataTime'
})
export class DataTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var unix_timestamp : number = value;

    var a = new Date(unix_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;

    return time;
  }

}
