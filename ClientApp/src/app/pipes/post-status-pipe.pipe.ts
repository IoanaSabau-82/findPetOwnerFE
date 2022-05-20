import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postStatusPipe'
})
export class PostStatusPipePipe implements PipeTransform {

  transform(value: number) {
    switch ( value ) {
      case 0:
          return 'Open'
      case 1:
        return 'Pending'
      case 2:
        return 'CipFound'
      case 3:
        return 'NoCip'
      case 4:
        return 'OpenForAdoption'
      case 5:
        return 'Closed'
   }
   return 'Status error'
  }
}
