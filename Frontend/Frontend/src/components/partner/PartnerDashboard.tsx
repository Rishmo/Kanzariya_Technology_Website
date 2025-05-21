import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, DollarSign, Bell } from 'lucide-react';

const PartnerDashboard = () => {
  const [stats, setStats] = useState({
    totalLeads: 0,
    convertedLeads: 0,
    pendingCommission: 0,
    totalEarnings: 0,
  });

  useEffect(() => {
    // TODO: Fetch actual stats from Supabase
    setStats({
      totalLeads: 25,
      convertedLeads: 12,
      pendingCommission: 2500,
      totalEarnings: 15000,
    });
  }, []);

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-primary-900 mb-6">Partner Dashboard</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Leads"
            value={stats.totalLeads}
            icon={<Users className="h-6 w-6" />}
            color="bg-blue-500"
          />
          <StatCard
            title="Converted Leads"
            value={stats.convertedLeads}
            icon={<FileText className="h-6 w-6" />}
            color="bg-green-500"
          />
          <StatCard
            title="Pending Commission"
            value={`₹${stats.pendingCommission}`}
            icon={<Bell className="h-6 w-6" />}
            color="bg-yellow-500"
          />
          <StatCard
            title="Total Earnings"
            value={`₹${stats.totalEarnings}`}
            icon={<DollarSign className="h-6 w-6" />}
            color="bg-purple-500"
          />
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h3 className="text-lg font-semibold text-primary-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <ActivityItem
              title="New Lead Submitted"
              description="Lead for Enterprise Software Development"
              date="2 hours ago"
              status="pending"
            />
            <ActivityItem
              title="Commission Approved"
              description="₹1,500 approved for Lead #KZ-LEAD-2025-00123"
              date="1 day ago"
              status="success"
            />
            <ActivityItem
              title="Lead Status Updated"
              description="Lead #KZ-LEAD-2025-00120 marked as converted"
              date="2 days ago"
              status="info"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const StatCard = ({ title, value, icon, color }: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}) => (
  <div className="bg-white rounded-xl shadow-soft p-6">
    <div className="flex items-center">
      <div className={`${color} p-3 rounded-lg text-white`}>
        {icon}
      </div>
      <div className="ml-4">
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-primary-900">{value}</p>
      </div>
    </div>
  </div>
);

const ActivityItem = ({ title, description, date, status }: {
  title: string;
  description: string;
  date: string;
  status: 'pending' | 'success' | 'info' | 'warning';
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'info':
        return 'bg-blue-100 text-blue-800';
      case 'warning':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div>
        <h4 className="font-medium text-primary-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="text-right">
        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(status)}`}>
          {status}
        </span>
        <p className="text-xs text-gray-500 mt-1">{date}</p>
      </div>
    </div>
  );
};

export default PartnerDashboard;