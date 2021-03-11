import {SignatureScopeItem} from "./signature-scope-item";
import {CertInfo} from "./cert-info";

export interface Signature {
  id: string;
  name: string;
  signingDate: string;
  format: string;
  scopeItems: SignatureScopeItem[];
  errors: string[];
  warns: string[];
  certInfo: CertInfo;
  certIssuerName: string;
  certSubjectName: string;
}
