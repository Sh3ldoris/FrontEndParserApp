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

  constructor(private reportService: ContainerService) { }

  ngOnInit(): void {
    this.reportService.currentReport.subscribe(rep => {
      this.report = rep;
    });

  }

  public openDocument(bStr: string, type: string) {
    const xmlStr = this.decodeBase(bStr);

    let blob = new Blob([xmlStr], {type: type});
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
