import { Component, OnInit } from '@angular/core';
import {ContainerReport} from "../../interface/container-report";
import {ContainerService} from "../../shared-service/container.service";

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
    switch (type) {
      case this.supportedFormats[1]:
        this.openXML(bStr);
        break;
      case this.supportedFormats[2]:
        this.openPDF(bStr);
        break;
      case 'application/octet-stream':
        this.openOctet(bStr);
        break;
      case this.supportedFormats[0]:
        this.openTXT(bStr);
        break;
    }
  }

  public isSupportedFormat(format: string) {
    return this.supportedFormats.includes(format);
  }

  private openOctet(bStr: string) {
    let blob = new Blob(
      ['bStr'],
      {
        type: 'application/octet-stream'
      }
    );
    /*let url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    URL.revokeObjectURL(url);*/
  }

  private openPDF(bStr: string) {
    let pdfWindow = window.open("");
    pdfWindow.document.write("<iframe width='100%' height='100%' src='data:application/pdf;base64, " + encodeURI(bStr) + "'></iframe>");
  }

  private openXML(bStr: string) {
    const dataToDisplay = this.decodeBase(bStr);
    let blob = new Blob([dataToDisplay], {type: 'text/xm'});
    let url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    URL.revokeObjectURL(url);
  }

  private openTXT(bStr: string) {
    let blob = new Blob([atob(bStr)], {type: 'text/plain'});
    let url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    URL.revokeObjectURL(url);
  }

  private decodeBase(str: string) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }
}
