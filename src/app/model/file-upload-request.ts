export class FileUploadRequest {
  base64Content: string;
  type: string;
  name: string;

  constructor(file: string, type: string, name: string) {
    this.base64Content = file;
    this.type = type;
    this.name = name;
  }
}
