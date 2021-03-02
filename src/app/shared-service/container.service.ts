import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {ContainerReport} from "../interface/container-report";

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  private reportSource = new BehaviorSubject(null);
  currentReport = this.reportSource.asObservable();

  private fileSource = new BehaviorSubject(null);
  currentFile = this.fileSource.asObservable();

  constructor() { }

  changeReport(cont: ContainerReport) {
      this.reportSource.next(cont);
  }

  changeSelectedFile(n: File) {
    this.fileSource.next(n);
  }

  cleanReport() {
    this.changeSelectedFile(null);
    this.changeReport(null);
  }
}
