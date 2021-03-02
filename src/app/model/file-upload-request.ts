export class FileUploadRequest {
  container: string;
  name: string;
  constructor(file: string, name: string) {
    this.container = file;
    this.name = name;
  }
}
