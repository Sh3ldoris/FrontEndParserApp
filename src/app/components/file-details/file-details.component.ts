import { Component, OnInit } from '@angular/core';
import {ContainerService} from "../../shared-service/container.service";
import {ContainerReport} from "../../interface/container-report";
import {OriginalDocument} from "../../interface/original-document";
import {VisualizationsService} from "../../services/visualizations.service";
import {VisualizationsFile} from "../../interface/visualizations-file";

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.scss']
})
export class FileDetailsComponent implements OnInit {

  report: ContainerReport;
  size: number;
  fileType: string;
  visualizations: VisualizationsFile[] = [];
  isLoadingVisualizations: boolean = false;
  displayModal = false;

  constructor(private reportService: ContainerService,
              private visualizationService: VisualizationsService) { }

  ngOnInit(): void {
    this.reportService.currentReport.subscribe(rep => {
      this.report = rep;
      if (this.report != null && this.report.originalDocuments.length)
        this.checkVisualizations(this.report.originalDocuments);
      if (this.report == null)
        this.visualizations = null;
    });
    this.reportService.currentFile.subscribe(file => {
      this.size = file?.size;
      this.fileType = file?.type;
    });
  }

  formatBytes(a,b = 2){
    if (0 === a)
      return"0 Bytes";
    const c=0>b?0:b,d=Math.floor(Math.log(a)/Math.log(1024));
    return parseFloat((a/Math.pow(1024,d)).toFixed(c))+" "+["Bytes","kB","MB","GB","TB","PB","EB","ZB","YB"][d];
  }

  showVisualozationDialog() {
    this.displayModal = true;
  }

  private checkVisualizations(docs: OriginalDocument[]): void {
    this.isLoadingVisualizations = true;

    if (docs.length == 0) {
      return;
    }

    let xmlDocs = docs.filter(function (doc){
      return doc.type === 'text/xml';
    });

    if (xmlDocs.length == 0) {
      this.isLoadingVisualizations = false;
      return;
    }

    this.visualizationService.getVisualizations(xmlDocs).subscribe(
      (data: VisualizationsFile[]) => {
        this.visualizations = data;
        this.isLoadingVisualizations = false;
      },
      error => {
        this.isLoadingVisualizations = false;
      });
  }

}
