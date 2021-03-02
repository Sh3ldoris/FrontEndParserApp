import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FileUploadRequest} from "../model/file-upload-request";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  public upload(file: FileUploadRequest) {
    return this.http.post('/parse', file);
  }
}
