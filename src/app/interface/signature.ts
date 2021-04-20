import {SignatureScopeItem} from "./signature-scope-item";

export interface Signature {
  id: string;
  name: string;
  signingDate: string;
  format: string;
  scopeItems: SignatureScopeItem[];
  errors: string[];
  warns: string[];
  certIssuerName: string;
  certSubjectName: string;
}
