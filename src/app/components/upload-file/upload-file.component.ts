import {Component, OnInit} from '@angular/core';
import {FileUploadService} from "../../services/file-upload.service";
import {FileUploadRequest} from "../../model/file-upload-request";
import {ContainerReport} from "../../interface/container-report";
import {ContainerService} from "../../shared-service/container.service";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  uploadedFiles: any[] = [];

  constructor(private uploadService: FileUploadService,
              private reportService: ContainerService) { }

  ngOnInit(): void {

  }

  upload(event) {
    const file = event.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base = reader.result as string;
      this.uploadService.upload(new FileUploadRequest(base.split(',')[1], file.name))
        .subscribe( (data : ContainerReport) => {
          this.reportService.changeContainer(data);
        });
    };

    /*for(let file of event.files) {
      this.uploadedFiles.push(file);
      console.log('Hej');
    }*/
  }

  myUploader(event) {
    console.log('hek');
  }

  onBasicUploadAuto(event) {
    console.log('hek');
  }

}
