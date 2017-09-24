export class Hscode {
  id: number;
  code: string;
  description: string;
  special_permission?: string;
  unit: string;
  duty: number;
  excise: number;
  sur: number;
  vat: number;
  withholding: number;

  constructor(hscode: {
    id: number,
    code: string,
    description: string,
    special_permission?: string,
    unit: string,
    duty: number,
    excise: number,
    sur: number,
    vat: number,
    withholding: number
  }) {
    this.id = hscode.id;
    this.code = hscode.code;
    this.description = hscode.description;
    this.duty = hscode.duty;
    this.excise = hscode.excise;
    this.special_permission = hscode.special_permission;
    this.sur = hscode.sur || 10;
    this.unit = hscode.unit || 'UN';
    this.vat = hscode.vat || 15;
    this.withholding = hscode.withholding || 3;
  }

  get display() {
    return `${this.code}: ${this.description}`;
  }
}
