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

  /**
   * Changes parsed info between components
   * @param cont
   */
  changeReport(cont: ContainerReport): void {
      this.reportSource.next(cont);
  }

  /**
   * Changes container info between components
   * @param cont
   */
  changeSelectedFile(n: File): void {
    this.fileSource.next(n);
  }

  cleanReport(): void {
    this.changeSelectedFile(null);
    this.changeReport(null);
  }
}
