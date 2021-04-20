import {OriginalDocument} from "./original-document";
import {Signature} from "./signature";

export interface ContainerReport {
  originalDocuments: OriginalDocument[];
  containerName: string;
  validationDate: string;
  signaturesCount: number;
  validSignaturesCount: number;
  signatures: Signature[];
}
