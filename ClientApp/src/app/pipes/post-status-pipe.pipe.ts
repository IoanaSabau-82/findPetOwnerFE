import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postStatusPipe'
})
export class PostStatusPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
