import { Pipe, PipeTransform } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

@Pipe({
  name: 'md5'
})
export class Md5Pipe implements PipeTransform {

  md5 = new Md5();
  s : any;

  transform(value: string, value2: string): string {
    if(value == "")
      return "";

    this.s = Md5.hashAsciiStr(value);
    return this.s;
  }

}
