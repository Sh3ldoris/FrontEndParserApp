import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FileUploadRequest} from "../model/file-upload-request";
import {OriginalDocument} from "../interface/original-document";
import {VisualizationsFile} from "../interface/visualizations-file";

@Injectable({
  providedIn: 'root'
})
export class VisualizationsService {

  constructor(private http: HttpClient) { }

  public getVisualizations(files: OriginalDocument[]) {
    return this.http.post('/api/visualize', files);
  }
}
