import {Component, Input, OnInit} from '@angular/core';
import {Signature} from "../../interface/signature";

@Component({
  selector: 'app-signature-detail',
  templateUrl: './signature-detail.component.html',
  styleUrls: ['./signature-detail.component.scss']
})
export class SignatureDetailComponent implements OnInit {

  @Input() signature: Signature = null;
  private signDate: Date = null;
  signDateStr: string = ''

  collapsed : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.signDate = new Date(this.signature.signingDate);
    let minutes = + this.signDate.getMinutes() < 10 ? '0' + this.signDate.getMinutes() : this.signDate.getMinutes();
    let hours = + this.signDate.getHours() < 10 ? '0' + this.signDate.getHours() : this.signDate.getHours();
    this.signDateStr = this.signDate.getDate() + '.' + this.signDate.getMonth() + '.' + this.signDate.getFullYear()
      + ' ' + this.signDate.getHours() + ':' + minutes + ':' + hours;
  }

}
