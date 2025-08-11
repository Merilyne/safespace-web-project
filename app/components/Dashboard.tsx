import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col justify-between">
      {/* Navbar */}
      <header className="bg-white px-6 py-4 flex justify-between items-center shadow">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-green-700">Safe<span className="text-black">Space</span></h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-lg">🔔</button>
          <button className="text-lg">👤</button>
          <button className="text-lg">⤴️</button>
          <button className="text-sm text-gray-700 hover:underline">Sign out</button>
        </div>
      </header>

      {/* Tabs */}
      <nav className="bg-white p-2 flex justify-center border-b border-gray-300">
        <div className="flex space-x-3 rounded-full bg-gray-200 p-1">
          {["Overview", "Clients", "Schedule", "Notes", "Crisis", "Reports"].map((tab, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                tab === "Overview" ? "bg-green-600 text-white" : "text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow px-6 py-4">
        <h2 className="text-lg font-bold mb-1">Welcome, <span className="text-black">Eric!</span></h2>
        <p className="text-sm text-gray-600 mb-6">Here's what your day looks like today!</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Active Clients", value: 156, icon: "👥" },
            { label: "Todays Session", value: 6, icon: "📅" },
            { label: "High-Risk Clients", value: 3, icon: "🚨" },
            { label: "Pending Notes", value: 5, icon: "📝" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-4 shadow flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold">{item.label}</h3>
                <p className="text-3xl font-bold">{item.value}</p>
              </div>
              <span className="text-3xl">{item.icon}</span>
            </div>
          ))}
        </div>

        {/* Notifications + Schedule */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Notifications */}
          <div className="bg-green-200 rounded-lg p-4 shadow">
            <h3 className="text-sm font-semibold mb-4">Recent Notifications</h3>
            {[
              { text: "New client referral available", time: "2 hours ago" },
              { text: "Appointment Reminder: John Doe at 10:30 AM", time: "30 minutes ago" },
              { text: "High-Risk Client flagged: Sarah Johnson", time: "30 minutes ago" },
            ].map((note, i) => (
              <div key={i} className="bg-white rounded-lg p-3 mb-2 shadow">
                <p className="text-sm font-medium">{note.text}</p>
                <p className="text-xs text-gray-500">{note.time}</p>
              </div>
            ))}
          </div>

          {/* Schedule */}
          <div className="bg-green-200 rounded-lg p-4 shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold">Today's Schedule</h3>
              <button className="text-sm bg-white px-2 py-1 rounded-full shadow">+ Add</button>
            </div>
            {[
              { name: "Emma Watson", type: "Initial Consultations", time: "10:00 AM" },
              { name: "David Chen", type: "Initial Consultations", time: "02:00 PM" },
              { name: "Lisa Rodriguez", type: "Follow up Session", time: "04:00 PM" },
            ].map((slot, i) => (
              <div key={i} className="bg-white rounded-lg p-3 mb-2 shadow flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">{slot.name}</p>
                  <p className="text-xs text-gray-500">{slot.type}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-semibold">{slot.time}</span>
                  <span className="text-xs bg-blue-500 text-white rounded-full px-2 py-0.5 mt-1">Confirmed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-3 text-xs">
        2025 SafeSapce. All Right Reserved
      </footer>
    </div>
  );
}
