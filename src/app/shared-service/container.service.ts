import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {ContainerReport} from "../interface/container-report";

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  private reportSource = new BehaviorSubject(null);
  currentReport = this.reportSource.asObservable();

  constructor() { }

  changeContainer(cont: ContainerReport) {
      this.reportSource.next(cont);
  }
}
