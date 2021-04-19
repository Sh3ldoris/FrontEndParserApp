import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OriginalDocument} from "../interface/original-document";

@Injectable({
  providedIn: 'root'
})
export class VisualizationsService {

  constructor(private http: HttpClient) { }

   public getVisualizations(files: OriginalDocument[]) {
    return this.http.post('/api/visualize', files);
  }
}
