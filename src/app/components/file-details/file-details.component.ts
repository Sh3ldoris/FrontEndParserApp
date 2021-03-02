import { Component, OnInit } from '@angular/core';
import {ContainerService} from "../../shared-service/container.service";
import {ContainerReport} from "../../interface/container-report";

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.scss']
})
export class FileDetailsComponent implements OnInit {

  report: ContainerReport;
  size: number;
  fileType: string;

  constructor(private reportService: ContainerService) { }

  ngOnInit(): void {
    this.reportService.currentReport.subscribe(rep => {
      this.report = rep;
    });
    this.reportService.currentFile.subscribe(file => {
      this.size = file?.size;
      this.fileType = file?.type;
    });
  }

  formatBytes(a,b=2){
    if(0===a)return"0 Bytes";
    const c=0>b?0:b,d=Math.floor(Math.log(a)/Math.log(1024));
    return parseFloat((a/Math.pow(1024,d)).toFixed(c))+" "+["Bytes","kB","MB","GB","TB","PB","EB","ZB","YB"][d];
  }


}
