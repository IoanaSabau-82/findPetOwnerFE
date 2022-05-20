import { Directive, Output, EventEmitter, HostBindingDecorator, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appUpload]'
})
export class UploadDirective {

  constructor() { }
  
  @Output() onFileDropped = new EventEmitter<any>();
  @HostBinding('style.background-color') public background = '#f2f2f2';
  @HostBinding('style.opacity') public opacity = '1';

//Dragover listener, when something is dragged over our host element
@HostListener('dragover', ['$event']) onDragOver(evt:any) {
  evt.preventDefault();
  evt.stopPropagation();
  this.background = '#9ecbec';
  this.opacity = '0.8'
}
//Dragleave listener, when something is dragged away from our host element
@HostListener('dragleave', ['$event']) public onDragLeave(evt:any) {
  evt.preventDefault();
  evt.stopPropagation();
  this.background = '#f2f2f2'
  this.opacity = '1'
}
@HostListener('drop', ['$event']) public ondrop(evt:any) {
  evt.preventDefault();
  evt.stopPropagation();
  this.background = '#f5fcff'
  this.opacity = '1'
  let files = evt.dataTransfer.files;
  if (files.length > 0) {
    this.onFileDropped.emit(files)
  }
}
}
