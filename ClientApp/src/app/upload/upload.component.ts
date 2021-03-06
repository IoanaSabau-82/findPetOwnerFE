import { HttpClient, HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../services/users.service';



@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  
  faCloudArrowUp = faCloudArrowUp;
  
  progress!: number;
  message!: string;
  files:any[]=[];
  fileToDelete!: File;

  @Output() public onUploadFinished = new EventEmitter();

  
  constructor(private http: HttpClient, private usersService:UsersService) { }

  ngOnInit() {
  }
  
  uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
    let filesToUpload:File[] = files;

    const formData = new FormData();

    Array.from(filesToUpload).map((file, index) => {
      return formData.append('file'+index, file, file.name);
    });

    console.log("filestoup",filesToUpload)

    this.http.post('https://localhost:7172/api/Blob', formData, {reportProgress: true, observe: 'events'})
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.Response) {
          this.onUploadFinished.emit(event.body);
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });

    for (let file of filesToUpload){
      this.files.push(file)
    }
  }
}