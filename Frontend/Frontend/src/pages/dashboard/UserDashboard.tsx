import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, DollarSign, FileText, Clock } from 'lucide-react';

const UserDashboard = () => {
  const [userStats, setUserStats] = useState({
    attendance: 'Present',
    salary: 48000,
    tasksPending: 3,
    leaveBalance: 2,
  });

  useEffect(() => {
    // TODO: Replace with real user data from Supabase/API
    setUserStats({
      attendance: 'Present',
      salary: 48000,
      tasksPending: 3,
      leaveBalance: 2,
    });
  }, []);

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-primary-900 mb-6">Welcome Back, John 👋</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Today's Attendance"
            value={userStats.attendance}
            icon={<CalendarCheck className="h-6 w-6" />}
            color="bg-green-500"
          />
          <StatCard
            title="Monthly Salary"
            value={`₹${userStats.salary.toLocaleString()}`}
            icon={<DollarSign className="h-6 w-6" />}
            color="bg-blue-500"
          />
          <StatCard
            title="Pending Tasks"
            value={`${userStats.tasksPending} Tasks`}
            icon={<FileText className="h-6 w-6" />}
            color="bg-orange-500"
          />
          <StatCard
            title="Leave Balance"
            value={`${userStats.leaveBalance} Days`}
            icon={<Clock className="h-6 w-6" />}
            color="bg-purple-500"
          />
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <QuickAction
            title="My Tasks"
            description="View and manage your current tasks"
            buttonText="View Tasks"
            onClick={() => console.log('Navigate to My Tasks')}
          />
          <QuickAction
            title="Apply Leave"
            description="Submit leave requests and track status"
            buttonText="Apply Now"
            onClick={() => console.log('Navigate to Leave Application')}
          />
        </div>

        {/* Activity Feed */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h3 className="text-lg font-semibold text-primary-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <ActivityItem
              title="Checked In"
              description="You checked in at 9:05 AM today"
              date="Today, 9:05 AM"
              status="success"
            />
            <ActivityItem
              title="Leave Approved"
              description="Your 1-day leave for May 3 was approved"
              date="Yesterday, 4:20 PM"
              status="info"
            />
            <ActivityItem
              title="New Task Assigned"
              description="Prepare monthly project report by Friday"
              date="2 days ago"
              status="pending"
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

export default UserDashboard;
