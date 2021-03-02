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

  constructor(private reportService: ContainerService) { }

  ngOnInit(): void {
    this.reportService.currentReport.subscribe(rep => {
      this.report = rep;
    });
  }

}
