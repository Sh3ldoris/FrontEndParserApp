import {Component, Input, OnInit} from '@angular/core';
import {VisualizationsFile} from "../../interface/visualizations-file";
import { generateFileBlob, decodeBase } from "../../shared-service/functions";
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-visualozation',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnInit {
  @Input() data: VisualizationsFile;
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Opens html visualization
   * @param event
   */
  openHtml(event): void {
    event.preventDefault(); //Prevent to refresh page
    if (this.data.base64Html == null) {
      return;
    }
    let blob = generateFileBlob(this.data.base64Html, 'text/html')
    let url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    URL.revokeObjectURL(url);
  }

  /**
   * Opens pdf visualization
   * @param event
   */
  openPdf(event): void {
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
    html2pdf().from(decodeBase(this.data.base64Html)).set(option).save();
  }

}
