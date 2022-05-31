import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pictureName'
})
export class PictureNamePipe implements PipeTransform {

  transform(value: string): unknown {

    return value.replace("https://findpetowner.blob.core.windows.net/file-container/",'');
  }

}
