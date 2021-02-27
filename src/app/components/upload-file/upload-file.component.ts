import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  uploadedFiles: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onUpload(event) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }

    //this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

}
