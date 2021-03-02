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
}
