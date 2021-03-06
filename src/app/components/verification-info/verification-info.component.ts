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
  private verificationDate: Date = null;
  verDateStr: string = '';
  constructor(private reportService: ContainerService) { }

  ngOnInit(): void {
    this.reportService.currentReport.subscribe(rep => {
      this.report = rep;
      if (rep != null) {
        this.verificationDate = new Date(rep.validationDate);
        this.verDateStr = this.verificationDate.getDay() + '.' + this.verificationDate.getMonth() + '.' + this.verificationDate.getFullYear()
          + ' ' + this.verificationDate.getHours() + ':' + this.verificationDate.getMinutes() + ':' + this.verificationDate.getSeconds();
      }
    });
  }

}
