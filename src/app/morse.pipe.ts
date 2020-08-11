import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
  name: 'morse'
})
export class MorsePipe implements PipeTransform {

  word : string = "";
  transform(value: string, value2: string): string {

    for(let char of value){
      switch (char)
      {
          case 'a':
              this.word +=".-";
              break;
          case 'b':
              this.word +="-...";
              break;
          case 'c':
              this.word +="-.-.";
              break;
          case 'd':
              this.word +="-..";
              break;
          case 'e':
              this.word +=".";
              break;
          case 'f':
              this.word +="..-";
              break;
          case 'g':
              this.word +="--.";
              break;
          case 'h':
              this.word +="....";
              break;
          case 'i':
              this.word +="..";
              break;
          case 'j':
              this.word +=".---";
              break;
          case 'k':
              this.word +="-.-";
              break;
          case 'l':
              this.word +=".-..";
              break;
          case 'm':
              this.word +="--";
              break;
          case 'n':
              this.word +="-.";
              break;
          case 'o':
              this.word +="---";
              break;
          case 'p':
              this.word +=".--.";
              break;
          case 'q':
              this.word +="--.-";
              break;
          case 'r':
              this.word +=".-.";
              break;
          case 's':
              this.word +="...";
              break;
          case 't':
              this.word +="-";
              break;
          case 'u':
              this.word +="..-";
              break;
          case 'v':
              this.word +="...-";
              break;
          case 'w':
              this.word +=".--";
              break;
          case 'x':
              this.word +=" -..- ";
              break;
          case 'y':
              this.word +=" -..- ";
              break;
          case 'z':
              this.word +="--..";
              break;
          default:
              this.word +="";
              break;
      }
      
    }

    return this.word;
  }

}
