import {Component, OnInit, ViewChild} from '@angular/core';
import {FileUploadService} from "../../services/file-upload.service";
import {FileUploadRequest} from "../../model/file-upload-request";
import {ContainerReport} from "../../interface/container-report";
import {ContainerService} from "../../shared-service/container.service";
import {FileUpload} from "primeng/fileupload";
import {MessagesService} from "../../shared-service/messages.service";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  @ViewChild('fileUpload')
  public fileUpload: FileUpload;
  uploadedFiles: any[] = [];
  isLoading: boolean = false;

  constructor(private uploadService: FileUploadService,
              private reportService: ContainerService,
              private messageShowService: MessagesService) { }

  ngOnInit(): void {
  }

  chooseFile() {
    document.querySelector('input').click();
  }

  addFile(event) {
    this.fileUpload.clear();
    this.uploadedFiles = [];
    for (let file of event.currentFiles) {
      this.uploadedFiles.push(file);
    }
  }

  upload(event) {

    if (this.uploadedFiles[0] == null)
      return;

    this.isLoading = true;
    const file = this.uploadedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base = reader.result as string;
      this.uploadService.upload(new FileUploadRequest(base.split(',')[1], file.name))
        .subscribe(
          (data : ContainerReport) => {
          this.reportService.changeReport(data);
          this.reportService.changeSelectedFile(file)
          this.isLoading = false;
        }, error => {
          this.isLoading = false;
          this.fileUpload.clear();
          this.messageShowService.changeMessage(
            {severity: 'error', key: 'error', summary:'Chyba', detail:'Nepodporovaný typ súboru'}
          );
          console.log(error);
        });
    };
  }

  formatBytes(a,b=2){
    if(0===a)return"0 Bytes";
    const c=0>b?0:b,d=Math.floor(Math.log(a)/Math.log(1024));
    return parseFloat((a/Math.pow(1024,d)).toFixed(c))+" "+["Bytes","kB","MB","GB","TB","PB","EB","ZB","YB"][d];
  }

  onRemoveMethod(event) {
    this.reportService.cleanReport();
    this.uploadedFiles = [];
  }

}
