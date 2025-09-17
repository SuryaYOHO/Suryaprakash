import React from "react";
import { 
  Users, 
  BookOpen, 
  Clock, 
  Percent, 
  DollarSign, 
  ArrowUp, 
  ArrowDown
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ElementType;
  color: string;
  trend?: string;
  trendDirection?: 'up' | 'down' | 'neutral';

}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, value, subtitle, icon: Icon, color, trend, trendDirection 
}) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-3">
          <div className={`p-2 rounded-lg ${color}`}>
            <Icon size={20} className="text-white" />
          </div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
        </div>
        <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        {trend && (
          <div className="flex items-center mt-2">
            {trendDirection === 'up' && <ArrowUp size={14} className="text-green-500 mr-1" />}
            {trendDirection === 'down' && <ArrowDown size={14} className="text-red-500 mr-1" />}
            <span className={`text-xs font-medium ${
              trendDirection === 'up' ? 'text-green-600' : 
              trendDirection === 'down' ? 'text-red-600' : 'text-gray-600'
            }`}>
              {trend}
            </span>
          </div>
        )}
      </div>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const metrics = [
    { title: "Total Students", value: "120", subtitle: "Enrolled Students", icon: Users, color: "bg-blue-500" },
    { title: "Total Courses", value: "8", subtitle: "Active Courses", icon: BookOpen, color: "bg-purple-500" },
    { title: "Attendance Rate", value: "95%", subtitle: "This Month", icon: Percent, color: "bg-teal-500" },
    { title: "Monthly Revenue", value: "₹1.2L", subtitle: "Fees Collected", icon: DollarSign, color: "bg-green-500" },
    { title: "Pending Fees", value: "₹30K", subtitle: "This Month", icon: Clock, color: "bg-red-500" },
    { title: "New Students", value: "10", subtitle: "This Month", icon: Users, color: "bg-orange-500" },
  ];

  return (
    <div className="space-y-6">
      {/* Main Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => <MetricCard key={index} {...metric} />)}
      </div>

      {/* Additional Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Exams */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Exams</h3>
            <span className="text-sm text-gray-500">This Month</span>
          </div>
          <div className="bg-yellow-100 rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-yellow-600 mb-2">3</p>
            <p className="text-sm text-gray-600">Exams scheduled</p>
          </div>
        </div>

        {/* Courses Ending Soon */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Courses Ending Soon</h3>
            <span className="text-sm text-gray-500">This Month</span>
          </div>
          <div className="bg-pink-100 rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-pink-600 mb-2">2</p>
            <p className="text-sm text-gray-600">Courses expiring</p>
          </div>
        </div>
      </div>

      {/* Revenue & Attendance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Monthly Fee Collection</h3>
            <select className="text-sm border border-gray-300 rounded px-2 py-1">
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Chart placeholder</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Attendance Overview</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Class A</span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Class B</span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-gray-600">Class C</span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
