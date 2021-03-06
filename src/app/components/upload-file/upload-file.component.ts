import {Component, OnInit, ViewChild} from '@angular/core';
import {FileUploadService} from "../../services/file-upload.service";
import {FileUploadRequest} from "../../model/file-upload-request";
import {ContainerReport} from "../../interface/container-report";
import {ContainerService} from "../../shared-service/container.service";
import {FileUpload} from "primeng/fileupload";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  @ViewChild('fileUpload')
  public fileUpload: FileUpload;

  uploadedFiles: any[] = [];

  constructor(private uploadService: FileUploadService,
              private reportService: ContainerService) { }

  ngOnInit(): void {
  }

  hej() {
    this.fileUpload.upload();
  }

  upload(event) {
    const file = event.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(event.files[0]);

    reader.onload = () => {
      const base = reader.result as string;
      this.uploadService.upload(new FileUploadRequest(base.split(',')[1], file.name))
        .subscribe( (data : ContainerReport) => {
          this.reportService.changeReport(data);
          this.reportService.changeSelectedFile(file)
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

  onRemoveMethod(event) {
    this.reportService.cleanReport();
  }

}
