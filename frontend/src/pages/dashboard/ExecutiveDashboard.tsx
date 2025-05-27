import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, DollarSign, TrendingUp } from 'lucide-react';

const ExecutiveDashboard = () => {
  const [stats, setStats] = useState({
    totalPartners: 0,
    activeLeads: 0,
    monthlyRevenue: 0,
    conversionRate: 0,
  });

  useEffect(() => {
    // TODO: Fetch actual stats from Supabase
    setStats({
      totalPartners: 45,
      activeLeads: 120,
      monthlyRevenue: 350000,
      conversionRate: 68,
    });
  }, []);

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-primary-900 mb-6">Executive Dashboard</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Partners"
            value={stats.totalPartners}
            icon={<Users className="h-6 w-6" />}
            color="bg-blue-500"
          />
          <StatCard
            title="Active Leads"
            value={stats.activeLeads}
            icon={<FileText className="h-6 w-6" />}
            color="bg-green-500"
          />
          <StatCard
            title="Monthly Revenue"
            value={`₹${stats.monthlyRevenue.toLocaleString()}`}
            icon={<DollarSign className="h-6 w-6" />}
            color="bg-purple-500"
          />
          <StatCard
            title="Conversion Rate"
            value={`${stats.conversionRate}%`}
            icon={<TrendingUp className="h-6 w-6" />}
            color="bg-yellow-500"
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <QuickAction
            title="Partner Management"
            description="Review and manage partner accounts"
            buttonText="Manage Partners"
            onClick={() => console.log('Navigate to partner management')}
          />
          <QuickAction
            title="Lead Tracking"
            description="Monitor and update lead status"
            buttonText="View Leads"
            onClick={() => console.log('Navigate to lead tracking')}
          />
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h3 className="text-lg font-semibold text-primary-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <ActivityItem
              title="New Lead Assigned"
              description="Enterprise software development lead from Partner #KZ-PTR-2025-00123"
              date="30 minutes ago"
              status="pending"
            />
            <ActivityItem
              title="Partner Agreement Updated"
              description="Agreement signed with Tech Solutions Ltd."
              date="2 hours ago"
              status="success"
            />
            <ActivityItem
              title="Commission Processed"
              description="Monthly commission calculated for 5 partners"
              date="1 day ago"
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

const QuickAction = ({ title, description, buttonText, onClick }: {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}) => (
  <div className="bg-white rounded-xl shadow-soft p-6">
    <h3 className="text-lg font-semibold text-primary-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button
      onClick={onClick}
      className="btn-primary"
    >
      {buttonText}
    </button>
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

export default ExecutiveDashboard;