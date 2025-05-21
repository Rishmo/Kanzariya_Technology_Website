export interface Partner {
  id: string;
  referenceNumber: string;
  businessName: string;
  email: string;
  phone: string;
  address: string;
  registrationDate: Date;
  status: 'pending' | 'approved' | 'rejected';
  kycStatus: 'pending' | 'verified' | 'rejected';
  bankDetails: {
    accountName: string;
    accountNumber: string;
    bankName: string;
    ifscCode: string;
  };
}

export interface Lead {
  id: string;
  partnerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  type: string;
  status: 'new' | 'inProgress' | 'converted' | 'rejected';
  submissionDate: Date;
  notes?: string;
}

export interface Commission {
  id: string;
  partnerId: string;
  leadId: string;
  amount: number;
  status: 'pending' | 'approved' | 'paid';
  createdAt: Date;
  paidAt?: Date;
}

export interface Agreement {
  id: string;
  partnerId: string;
  fileUrl: string;
  uploadedBy: string;
  uploadedAt: Date;
  status: 'active' | 'expired' | 'terminated';
}