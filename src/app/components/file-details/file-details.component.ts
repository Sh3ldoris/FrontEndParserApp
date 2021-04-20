import { Component, OnInit } from '@angular/core';
import {ContainerService} from "../../shared-service/container.service";
import {ContainerReport} from "../../interface/container-report";
import {OriginalDocument} from "../../interface/original-document";
import {VisualizationsService} from "../../services/visualizations.service";
import {VisualizationsFile} from "../../interface/visualizations-file";
import { formatBytes } from "../../shared-service/functions";

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
        this.checkForVisualizations(this.report.originalDocuments);
      if (this.report == null)
        this.visualizations = null;
    });
    this.reportService.currentFile.subscribe(file => {
      this.size = file?.size;
      this.fileType = file?.type;
    });
  }

  /**
   * Returns formated bytes size
   * @param a
   * @param b
   */
  formatBytesWrapp(a, b = 2): string {
    return formatBytes(a, b);
  }

  showVisualizationDialog(): void {
    this.displayModal = true;
  }

  /**
   * Searches for visualizations if doc is XML
   * @param docs
   * @private
   */
  private checkForVisualizations(docs: OriginalDocument[]): void {
    this.isLoadingVisualizations = true;

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
