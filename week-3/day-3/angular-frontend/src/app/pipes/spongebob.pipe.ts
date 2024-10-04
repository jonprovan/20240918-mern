import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spongebob',
  standalone: true
})
export class SpongebobPipe implements PipeTransform {

  // we MUST implement this method without changing its name
  // if you manually insert parameters, you MUST use them
  // if they're in the ...args array, they're OPTIONAL
  transform(value: string, capFirst: boolean, ...args: unknown[]): string {
    let newValue = '';

    if (capFirst)
      for(let i = 0; i < value.length; i++) {
        if(i % 2 != 0)
          newValue = newValue + value.charAt(i).toLowerCase();
        else
          newValue = newValue + value.charAt(i).toUpperCase();
      }
    else 
      for(let i = 0; i < value.length; i++) {
        if(i % 2 == 0)
          newValue = newValue + value.charAt(i).toLowerCase();
        else
          newValue = newValue + value.charAt(i).toUpperCase();
      }

    return newValue;
  }

}
