import {Component, Input, OnInit} from '@angular/core';
import {VisualizationsFile} from "../../interface/visualizations-file";
import { generateFileBlob } from "../../shared-service/functions";
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-visualozation',
  templateUrl: './visualozation.component.html',
  styleUrls: ['./visualozation.component.scss']
})
export class VisualozationComponent implements OnInit {
  @Input() data: VisualizationsFile;
  constructor() { }

  ngOnInit(): void {
  }

  openHtml(event) {
    event.preventDefault();
    if (this.data.base64Html == null) {
      return;
    }
    let blob = generateFileBlob(this.data.base64Html, 'text/html')
    let url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    URL.revokeObjectURL(url);
  }

  openPdf(event) {
    event.preventDefault();
    if (this.data.base64Html == null) {
      return;
    }

    const option = {
      margin:       1,
      filename:     this.data.name.substring(0, this.data.name.length-3) + 'pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 5 },
      jsPDF:        {unit: 'pt', format: 'a3', orientation: 'p'}
    };
    html2pdf().from(this.decodeBase(this.data.base64Html)).set(option).save();
  }

  private decodeBase(str: string) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

}
