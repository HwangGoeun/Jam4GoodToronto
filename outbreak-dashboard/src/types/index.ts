export interface Supplier {
  BusinessPartner: string;
  CompanyName: string;
  CityName: string;
  Region: string;
  Country: string;
  PhoneNumber: string;
  MaterialSupplied: string;
  FarmAuditScore: number;
  LastShipmentDate: string;
}

export interface Customer {
  Customer: string;
  CustomerName: string;
  Region: string;
  Country: string;
  EmailAddress: string;
  ProductReceived: string;
  DeliveryFrequency: string;
  LastDeliveryDate: string;
}

export interface MaterialDocument {
  MaterialDocument: string;
  Batch: string;
  Material: string;
  Supplier: string;
  Customer: string;
  Quantity: number;
  DocumentDate: string;
  ShipmentStatus: string;
}

export interface OutbreakEvent {
  id: string;
  timestamp: string;
  type: 'detection' | 'investigation' | 'recall' | 'notification' | 'resolution';
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  assignedTo?: string;
}

export interface LabTest {
  id: string;
  batchId: string;
  testDate: string;
  testType: string;
  result: string;
  status: 'pending' | 'completed' | 'positive' | 'negative';
  notes?: string;
}

export interface ConsumerComplaint {
  id: string;
  date: string;
  customerName: string;
  productCode: string;
  batchId: string;
  symptoms: string[];
  severity: 'low' | 'medium' | 'high';
  status: 'new' | 'investigating' | 'resolved';
}

export interface Notification {
  id: string;
  timestamp: string;
  type: 'alert' | 'warning' | 'info';
  message: string;
  priority: 'low' | 'medium' | 'high';
  read: boolean;
} 