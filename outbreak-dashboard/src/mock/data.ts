import { format } from 'date-fns';

// Types
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

// Mock Data
export const suppliers: Supplier[] = [
  {
    BusinessPartner: "F001",
    CompanyName: "Valley Verde Farms",
    CityName: "Salinas",
    Region: "CA",
    Country: "US",
    PhoneNumber: "8315550101",
    MaterialSupplied: "Romaine Lettuce",
    FarmAuditScore: 92,
    LastShipmentDate: "2025-04-25"
  },
  {
    BusinessPartner: "F002",
    CompanyName: "Sunny Hills Growers",
    CityName: "Imperial Valley",
    Region: "CA",
    Country: "US",
    PhoneNumber: "7605550099",
    MaterialSupplied: "Romaine Lettuce",
    FarmAuditScore: 78,
    LastShipmentDate: "2025-04-22"
  },
  {
    BusinessPartner: "F003",
    CompanyName: "Highland Acres Farm",
    CityName: "Yuma",
    Region: "AZ",
    Country: "US",
    PhoneNumber: "9285550192",
    MaterialSupplied: "Romaine Lettuce",
    FarmAuditScore: 85,
    LastShipmentDate: "2025-04-27"
  }
];

export const customers: Customer[] = [
  {
    Customer: "D101",
    CustomerName: "FreshDirect Logistics",
    Region: "Ontario",
    Country: "CA",
    EmailAddress: "alan.reid@freshdirect.ca",
    ProductReceived: "GreenFresh Romaine Lettuce",
    DeliveryFrequency: "Weekly",
    LastDeliveryDate: "2025-04-28"
  },
  {
    Customer: "D102",
    CustomerName: "GroceryFlow",
    Region: "Quebec",
    Country: "CA",
    EmailAddress: "chloe.t@groceryflow.ca",
    ProductReceived: "GreenFresh Romaine Lettuce",
    DeliveryFrequency: "Twice Weekly",
    LastDeliveryDate: "2025-04-26"
  },
  {
    Customer: "D103",
    CustomerName: "MapleLeaf Distributors",
    Region: "Manitoba",
    Country: "CA",
    EmailAddress: "imran.k@mapleleafd.ca",
    ProductReceived: "GreenFresh Romaine Lettuce",
    DeliveryFrequency: "Weekly",
    LastDeliveryDate: "2025-04-29"
  }
];

export const materialDocuments: MaterialDocument[] = [
  {
    MaterialDocument: "5000000001",
    Batch: "GFRM0520-QC",
    Material: "600G-ROM-3H",
    Supplier: "F001",
    Customer: "D102",
    Quantity: 450,
    DocumentDate: "2025-04-20",
    ShipmentStatus: "Delivered"
  },
  {
    MaterialDocument: "5000000002",
    Batch: "GFRM0519-ON",
    Material: "600G-ROM-3H",
    Supplier: "F002",
    Customer: "D101",
    Quantity: 500,
    DocumentDate: "2025-04-19",
    ShipmentStatus: "Delivered"
  },
  {
    MaterialDocument: "5000000003",
    Batch: "GFRM0519-ON",
    Material: "600G-ROM-3H",
    Supplier: "F003",
    Customer: "D103",
    Quantity: 300,
    DocumentDate: "2025-04-18",
    ShipmentStatus: "Delivered"
  }
];

export const outbreakEvents: OutbreakEvent[] = [
  {
    id: "1",
    timestamp: "2025-04-30T08:00:00Z",
    type: "detection",
    description: "Initial E. coli detection in batch GFRM0520-QC",
    status: "completed",
    assignedTo: "John Smith"
  },
  {
    id: "2",
    timestamp: "2025-04-30T08:30:00Z",
    type: "notification",
    description: "CFIA notification sent",
    status: "completed"
  },
  {
    id: "3",
    timestamp: "2025-04-30T09:00:00Z",
    type: "recall",
    description: "Recall initiated for affected batches",
    status: "in-progress",
    assignedTo: "Sarah Johnson"
  }
];

export const labTests: LabTest[] = [
  {
    id: "LT001",
    batchId: "GFRM0520-QC",
    testDate: "2025-04-30T07:00:00Z",
    testType: "E. coli O157:H7",
    result: "Positive",
    status: "positive",
    notes: "Initial screening positive"
  },
  {
    id: "LT002",
    batchId: "GFRM0519-ON",
    testDate: "2025-04-30T08:00:00Z",
    testType: "E. coli O157:H7",
    result: "Negative",
    status: "negative"
  }
];

export const consumerComplaints: ConsumerComplaint[] = [
  {
    id: "CC001",
    date: "2025-04-29T15:30:00Z",
    customerName: "Jane Doe",
    productCode: "600G-ROM-3H",
    batchId: "GFRM0520-QC",
    symptoms: ["nausea", "abdominal pain"],
    severity: "medium",
    status: "investigating"
  },
  {
    id: "CC002",
    date: "2025-04-29T16:45:00Z",
    customerName: "John Smith",
    productCode: "600G-ROM-3H",
    batchId: "GFRM0520-QC",
    symptoms: ["diarrhea", "fever"],
    severity: "high",
    status: "new"
  }
];

export const notifications: Notification[] = [
  {
    id: "N001",
    timestamp: "2025-04-30T08:00:00Z",
    type: "alert",
    message: "E. coli detected in batch GFRM0520-QC",
    priority: "high",
    read: false
  },
  {
    id: "N002",
    timestamp: "2025-04-30T08:15:00Z",
    type: "warning",
    message: "Recall process initiated",
    priority: "high",
    read: false
  }
]; 