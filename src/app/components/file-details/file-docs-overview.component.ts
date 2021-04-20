import { Component, OnInit } from '@angular/core';
import {ContainerReport} from "../../interface/container-report";
import {ContainerService} from "../../shared-service/container.service";
import { generateFileBlob } from "../../shared-service/functions";
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-file-docs-overwiew',
  templateUrl: './file-docs-overview.component.html',
  styleUrls: ['./file-docs-overview.component.scss']
})
export class FileDocsOverviewComponent implements OnInit {

  report: ContainerReport;
  private supportedFormats:string[] = ['text/plain','text/xml','application/pdf'];

  constructor(private reportService: ContainerService) { }

  ngOnInit(): void {
    this.reportService.currentReport.subscribe(rep => {
      this.report = rep;
    });

  }

  /**
   * Opens document in browser if it can be opened
   * @param bStr - base 64
   * @param type - doc mime type
   */
  public openDocument(bStr: string, type: string): void {
    if (!this.isSupportedFormat(type))
      return;

    let blob = generateFileBlob(bStr, type);
    let url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    URL.revokeObjectURL(url);
  }

  public downloadFile(bStr: string, type: string, name: string): void {
    fileSaver.saveAs(generateFileBlob(bStr, type), name);
  }

  public isSupportedFormat(format: string): boolean {
    return this.supportedFormats.includes(format);
  }

}
