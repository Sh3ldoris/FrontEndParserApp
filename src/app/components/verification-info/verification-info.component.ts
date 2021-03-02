import { Component, OnInit } from '@angular/core';
import {ContainerReport} from "../../interface/container-report";
import {ContainerService} from "../../shared-service/container.service";

@Component({
  selector: 'app-verification-info',
  templateUrl: './verification-info.component.html',
  styleUrls: ['./verification-info.component.scss']
})
export class VerificationInfoComponent implements OnInit {

  report: ContainerReport;

  constructor(private reportService: ContainerService) { }

  ngOnInit(): void {
    this.reportService.currentReport.subscribe(rep => {
      this.report = rep;
    });
  }

}
