import { Component, OnInit } from '@angular/core';
import {ContainerReport} from "../../interface/container-report";
import {ContainerService} from "../../shared-service/container.service";
import { generateFileBlob } from "../../shared-service/functions";
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-file-docs-overwiew',
  templateUrl: './file-docs-overwiew.component.html',
  styleUrls: ['./file-docs-overwiew.component.scss']
})
export class FileDocsOverwiewComponent implements OnInit {

  report: ContainerReport;
  private supportedFormats:string[] = ['text/plain','text/xml','application/pdf'];

  constructor(private reportService: ContainerService) { }

  ngOnInit(): void {
    this.reportService.currentReport.subscribe(rep => {
      this.report = rep;
    });

  }

  public openDocument(bStr: string, type: string) {
    if (!this.isSupportedFormat(type))
      return;

    this.openFileInBrowser(bStr, type);
  }

  public downloadFile(bStr: string, type: string, name: string) {
    fileSaver.saveAs(generateFileBlob(bStr, type), name);
  }

  public isSupportedFormat(format: string) {
    return this.supportedFormats.includes(format);
  }

  private openFileInBrowser(bStr: string, type: string) {
    let blob = generateFileBlob(bStr, type);
    let url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    URL.revokeObjectURL(url);
  }

}
