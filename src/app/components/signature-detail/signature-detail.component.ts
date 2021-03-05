import {Component, Input, OnInit} from '@angular/core';
import {Signature} from "../../interface/signature";

@Component({
  selector: 'app-signature-detail',
  templateUrl: './signature-detail.component.html',
  styleUrls: ['./signature-detail.component.scss']
})
export class SignatureDetailComponent implements OnInit {

  @Input() signature: Signature = null;

  collapsed : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
