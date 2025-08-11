'use client';

import { 
  FaUsers, FaCalendarAlt, FaExclamationTriangle, FaPencilAlt, FaBell, FaClock, FaUser 
} from 'react-icons/fa';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Nav */}
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-teal-500 font-extrabold text-xl">Safe</span>
          <span className="text-black font-extrabold text-xl">Space</span>
        </div>
        <div className="flex gap-4 items-center text-xl text-gray-700">
          <FaBell className="hover:text-teal-500 transition" />
          <FaUser className="text-gray-700 hover:text-teal-500 transition" />
          <button className="flex items-center gap-2 text-sm border border-gray-300 px-3 py-1 rounded hover:bg-gray-100 transition">
            Sign out
          </button>
        </div>
      </header>

      {/* Tabs */}
      <nav className="flex justify-center mt-10">
        <div className="flex border border-gray-300 rounded-full overflow-hidden">
          {['Overview', 'Clients', 'Schedule', 'Notes', 'Crisis', 'Reports'].map((tab, i) => (
            <button
              key={i}
              className={`px-6 py-2 font-medium ${
                tab === 'Overview'
                  ? 'bg-green-200 text-black'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } border-r border-gray-300 last:border-r-0 transition`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Welcome */}
      <div className="text-center mt-6">
        <h2 className="text-lg font-medium text-gray-800">
          Welcome, <span className="font-bold text-gray-900">Eric!</span>
        </h2>
        <p className="text-gray-600 text-sm">Here's what your day looks like today!</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 px-6 mt-6">
        <StatCard icon={<FaUsers size={24} />} label="Active Clients" value="156" color="bg-teal-500" />
        <StatCard icon={<FaCalendarAlt size={24} />} label="Today's Sessions" value="6" color="bg-indigo-500" />
        <StatCard icon={<FaExclamationTriangle size={24} />} label="High-Risk Clients" value="3" color="bg-red-500" />
        <StatCard icon={<FaPencilAlt size={24} />} label="Pending Notes" value="5" color="bg-yellow-500" />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 mt-6 flex-grow">
        {/* Notifications */}
        <div className="bg-green-200 rounded-lg p-4 shadow-md">
          <h3 className="font-bold text-gray-800 mb-4">Recent Notifications</h3>
          <NotificationItem text="New client referral available" time="2 hours ago" />
          <NotificationItem text="Appointment Reminder: John Doe at 10:30 AM" time="30 minutes ago" />
          <NotificationItem text="High-Risk Client flagged: Sarah Johnson" time="30 minutes ago" />
        </div>

        {/* Schedule */}
        <div className="bg-green-200 rounded-lg p-4 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Today's Schedule</h3>
            <button className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm hover:bg-teal-600 transition">
              + Add
            </button>
          </div>
          <ScheduleItem name="Emma Watson" role="Initial Consultations" time="10:00 AM" />
          <ScheduleItem name="David Chen" role="Initial Consultations" time="02:00 PM" />
          <ScheduleItem name="Lisa Rodriguez" role="Follow up Session" time="04:00 PM" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 mt-6">
        <p className="text-sm">2025 SafeSpace. All rights reserved</p>
      </footer>
    </div>
  );
}

// Reusable stat card
function StatCard({ icon, label, value, color }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4">
      <div className={`${color} text-white p-3 rounded-full`}>
        {icon}
      </div>
      <div>
        <div className="text-xl font-bold text-gray-900">{value}</div>
        <div className="text-sm text-gray-600 font-medium">{label}</div>
      </div>
    </div>
  );
}

// Reusable notification item
function NotificationItem({ text, time }) {
  return (
    <div className="bg-white rounded-lg p-3 mb-3 shadow-sm hover:shadow-md transition">
      <div className="text-sm text-gray-800">{text}</div>
      <div className="text-xs text-gray-500">{time}</div>
    </div>
  );
}

// Reusable schedule item with clock icon before name
function ScheduleItem({ name, role, time }) {
  return (
    <div className="bg-white rounded-lg p-3 mb-3 shadow-sm flex justify-between items-center hover:shadow-md transition">
      <div className="flex items-center gap-2">
        <FaClock className="text-teal-500" />
        <div>
          <div className="font-bold text-gray-900">{name}</div>
          <div className="text-xs text-gray-600">{role}</div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-sm font-bold text-gray-800">{time}</div>
        <span className="text-xs bg-blue-500 text-white rounded-full px-2 mt-1">Confirmed</span>
      </div>
    </div>
  );
}
