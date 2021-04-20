import {Component, OnInit, ViewChild} from '@angular/core';
import {FileUploadService} from "../../services/file-upload.service";
import {FileUploadRequest} from "../../model/file-upload-request";
import {ContainerReport} from "../../interface/container-report";
import {ContainerService} from "../../shared-service/container.service";
import {FileUpload} from "primeng/fileupload";
import {MessagesService} from "../../shared-service/messages.service";
import { formatBytes } from "../../shared-service/functions";
import {Subscription} from "rxjs";

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

  private subscriptions = new Subscription();

  constructor(private uploadService: FileUploadService,
              private reportService: ContainerService,
              private messageShowService: MessagesService) { }

  ngOnInit(): void {
  }

  /**
   * When is clicked on the custom upload \
   * btn there is selected hidden upload btn
   */
  chooseFile(): void {
    document.querySelector('input').click();
  }

  /**
   * Adds file to the selected files
   * @param event
   */
  addFile(event): void {
    this.subscriptions.unsubscribe();
    this.fileUpload.clear();
    this.uploadedFiles = [];
    for (let file of event.currentFiles) {
      this.uploadedFiles.push(file);
    }
  }

  /**
   * Uploads file to the server
   */
  upload(): void {

    if (this.uploadedFiles[0] == null)
      return;

    this.isLoading = true;
    const file = this.uploadedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base = reader.result as string;
      this.subscriptions.add(this.uploadService.upload(new FileUploadRequest(base.split(',')[1],file.type ,file.name))
        .subscribe(
          (data : ContainerReport) => {
            this.reportService.changeReport(data);
            this.reportService.changeSelectedFile(file)
            this.isLoading = false;
          }, error => {
            this.isLoading = false;
            this.fileUpload.clear();
            const message = (error.status === 415) ? 'Nepodporovaný typ súboru!' : 'Neočakávaná chyba serveru!'
            this.messageShowService.changeMessage(
              {severity: 'error', key: 'error', summary:'Chyba', detail: message}
            );
          })
      );
    };
  }


  /**
   * Returns bytes size in format
   * @param a
   * @param b
   */
  formatBytesWrapp(a,b=2): string{
    return formatBytes(a, b);
  }

  onRemoveMethod(): void {
    this.subscriptions.unsubscribe();
    this.isLoading = false;
    this.reportService.cleanReport();
    this.uploadedFiles = [];
  }

}
