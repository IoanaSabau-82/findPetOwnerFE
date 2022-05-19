import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assignedStatusPipe'
})
export class AssignedStatusPipe implements PipeTransform {

  transform(value: number) {
    switch ( value ) {
      case 0:
          return 'Scheduled'
      case 1:
        return 'Cancelled'
      case 2:
        return 'Completed'
   }
   return 'Status error'
  }
}
