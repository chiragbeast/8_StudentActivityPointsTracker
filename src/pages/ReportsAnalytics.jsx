import { useState } from 'react';
import { Link } from 'react-router-dom';

const ReportsAnalytics = () => {
  const [theme, setTheme] = useState('dark');

  const departmentData = [
    { label: 'CSE', value: 385, height: 70 },
    { label: 'ECE', value: 342, height: 60 },
    { label: 'EEE', value: 298, height: 50 },
    { label: 'CH', value: 412, height: 80 },
    { label: 'ME', value: 365, height: 65 },
    { label: 'CE', value: 278, height: 45 },
    { label: 'BT', value: 456, height: 90 },
    { label: 'MSE', value: 321, height: 55 },
    { label: 'PE', value: 389, height: 72 },
    { label: 'EP', value: 334, height: 58 }
  ];

  const topStudents = [
    {
      rank: 1,
      name: 'Alex Johnson',
      department: 'Computer Science',
      points: 4200,
      status: 'On Track',
      trend: 'up',
      avatar: 'https://i.pravatar.cc/150?img=11'
    },
    {
      rank: 2,
      name: 'Maria Garcia',
      department: 'Engineering',
      points: 3950,
      status: 'On Track',
      trend: 'up',
      avatar: 'https://i.pravatar.cc/150?img=24'
    },
    {
      rank: 3,
      name: 'Liam Chen',
      department: 'Biology',
      points: 3800,
      status: 'On Track',
      trend: 'stable',
      avatar: 'https://i.pravatar.cc/150?img=32'
    },
    {
      rank: 4,
      name: 'Sarah Smith',
      department: 'Mathematics',
      points: 3650,
      status: 'At Risk',
      trend: 'down',
      avatar: 'https://i.pravatar.cc/150?img=40'
    }
  ];

  return (
    <div className={`min-h-screen flex font-display transition-colors duration-300 ${theme === 'dark' ? 'bg-[#1a1121]' : 'bg-white'}`}
      style={theme === 'dark' ? {
        backgroundImage: 'radial-gradient(at 0% 0%, rgba(154, 40, 235, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(14, 33, 160, 0.15) 0px, transparent 50%)',
        backgroundAttachment: 'fixed'
      } : {}}>
      {/* Sidebar */}
      <aside className={`w-64 flex flex-col shrink-0 h-screen sticky top-0 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0c0712] text-white' : 'bg-[#0c0712] text-white'}`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-white">shield_person</span>
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight">SAPT Admin</h1>
            <p className="text-xs text-gray-400">Management Portal</p>
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1 mt-4">
          <Link 
            to="/admin_dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link 
            to="/admin_student_management"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Students</span>
          </Link>
          <Link 
            to="/faculty_advisor_management"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined">school</span>
            <span className="text-sm font-medium">Faculty Advisors</span>
          </Link>
          <a 
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white"
            href="#"
          >
            <span className="material-symbols-outlined">assessment</span>
            <span className="text-sm font-medium">Reports</span>
          </a>
          <div className="pt-4 pb-2 px-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">System</span>
          </div>
          <a 
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </a>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link to="/login" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
              <span className="material-symbols-outlined text-sm">logout</span>
            </div>
            <span className="text-sm font-medium">Log out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 flex flex-col overflow-y-auto transition-colors duration-300 ${theme === 'dark' ? 'bg-transparent' : 'bg-white'}`}>
        {/* Header */}
        <header className={`h-16 border-b flex items-center justify-between px-8 sticky top-0 z-10 transition-colors duration-300 backdrop-blur-xl ${theme === 'dark' ? 'bg-[#1a1121]/80 border-white/10' : 'bg-white/80 border-gray-100'}`}>
          <div className="flex items-center gap-4">
            <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Reports & Analytics</h2>
            <div className={`flex items-center gap-2 text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400 bg-white/5' : 'text-gray-400 bg-gray-50'}`}>
              <span>Admin</span>
              <span>/</span>
              <span className="text-primary">Analytics</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`flex items-center justify-center rounded-xl h-10 px-4 transition-colors ${theme === 'dark' ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
              >
                <span className="material-symbols-outlined">
                  {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
              <button className={`w-10 h-10 rounded-xl transition-colors flex items-center justify-center relative ${theme === 'dark' ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}>
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
              </button>
              <div className={`h-8 w-px ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-100'}`}></div>
              <div className="flex items-center gap-3 pl-2">
                <div className="text-right">
                  <p className={`text-sm font-semibold leading-none ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Alex Rivera</p>
                  <p className={`text-[10px] font-medium uppercase mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-400'}`}>Registrar</p>
                </div>
                <Link
                  to="/profile_settings"
                  className="w-10 h-10 rounded-xl bg-center bg-cover border-2 border-primary/40 cursor-pointer hover:border-primary/60 transition-colors"
                  style={{backgroundImage: "url('https://i.pravatar.cc/150?img=68')"}}
                ></Link>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
          {/* Hero Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className={`p-6 rounded-xl flex flex-col gap-4 relative overflow-hidden group transition-all duration-300 ${theme === 'dark' ? 'bg-[rgba(30,20,40,0.6)] backdrop-blur-xl border border-primary/20' : 'bg-white border border-gray-200 shadow-lg'}`}>
              <div className={`absolute -right-4 -top-4 size-24 rounded-full blur-2xl transition-all ${theme === 'dark' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-primary/5 group-hover:bg-primary/10'}`}></div>
              <div className="flex justify-between items-start">
                <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'}`}>
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <span className="text-[#0bda76] text-sm font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined !text-sm">trending_up</span> +12.5%
                </span>
              </div>
              <div>
                <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>Total Points Approved</p>
                <h3 className={`text-3xl font-bold mt-1 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>1,284,500</h3>
              </div>
              <div className={`w-full h-1 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-200'}`}>
                <div className="h-full bg-primary w-3/4"></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className={`p-6 rounded-xl flex flex-col gap-4 relative overflow-hidden group transition-all duration-300 ${theme === 'dark' ? 'bg-[rgba(30,20,40,0.6)] backdrop-blur-xl border border-primary/20' : 'bg-white border border-gray-200 shadow-lg'}`}>
              <div className={`absolute -right-4 -top-4 size-24 rounded-full blur-2xl transition-all ${theme === 'dark' ? 'bg-blue-500/10 group-hover:bg-blue-500/20' : 'bg-blue-500/5 group-hover:bg-blue-500/10'}`}></div>
              <div className="flex justify-between items-start">
                <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-500/10 text-blue-600'}`}>
                  <span className="material-symbols-outlined">school</span>
                </div>
                <span className="text-[#0bda76] text-sm font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined !text-sm">trending_up</span> +3.2%
                </span>
              </div>
              <div>
                <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>Graduation Eligibility Rate</p>
                <h3 className={`text-3xl font-bold mt-1 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>88.4%</h3>
              </div>
              <div className={`w-full h-1 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-200'}`}>
                <div className="h-full bg-blue-400 w-[88%]"></div>
              </div>
            </div>

            {/* Card 3 */}
            <div className={`p-6 rounded-xl flex flex-col gap-4 relative overflow-hidden group transition-all duration-300 ${theme === 'dark' ? 'bg-[rgba(30,20,40,0.6)] backdrop-blur-xl border border-primary/20' : 'bg-white border border-gray-200 shadow-lg'}`}>
              <div className={`absolute -right-4 -top-4 size-24 rounded-full blur-2xl transition-all ${theme === 'dark' ? 'bg-emerald-500/10 group-hover:bg-emerald-500/20' : 'bg-emerald-500/5 group-hover:bg-emerald-500/10'}`}></div>
              <div className="flex justify-between items-start">
                <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-500/10 text-emerald-600'}`}>
                  <span className="material-symbols-outlined">pending_actions</span>
                </div>
                <span className="text-orange-400 text-sm font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined !text-sm">pending</span> 124 Pending
                </span>
              </div>
              <div>
                <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>Total Submissions</p>
                <h3 className={`text-3xl font-bold mt-1 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>42,670</h3>
              </div>
              <div className={`w-full h-1 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-200'}`}>
                <div className="h-full bg-emerald-400 w-[65%]"></div>
              </div>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 gap-6">
            {/* Average Points per Department Bar Chart */}
            <div className={`rounded-xl p-8 flex flex-col transition-all duration-300 ${theme === 'dark' ? 'bg-[rgba(30,20,40,0.6)] backdrop-blur-xl border border-primary/20' : 'bg-white border border-gray-200 shadow-lg'}`}>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h4 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Average Points per Department</h4>
                  <p className={`text-xs ${theme === 'dark' ? 'text-white/40' : 'text-gray-500'}`}>Mean activity points per student by academic unit</p>
                </div>
                <button className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${theme === 'dark' ? 'bg-white/5 border border-white/10 hover:bg-white/10 text-white' : 'bg-gray-100 border border-gray-200 hover:bg-gray-200 text-gray-700'}`}>
                  This Semester
                </button>
              </div>
              <div className="flex-1 flex items-end justify-between gap-3 min-h-[240px] px-2">
                {departmentData.map((dept, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-3 w-full">
                    <div 
                      className="w-full bg-gradient-to-t from-[#0e21a0] to-[#9929ea] rounded-t-lg transition-all hover:brightness-125 cursor-pointer relative group"
                      style={{height: `${dept.height}%`}}
                    >
                      <div className={`absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${theme === 'dark' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
                        {dept.value} pts
                      </div>
                    </div>
                    <span className={`text-[9px] font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'}`}>{dept.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Submission Trends Line Chart */}
            <div className={`rounded-xl p-8 flex flex-col transition-all duration-300 ${theme === 'dark' ? 'bg-[rgba(30,20,40,0.6)] backdrop-blur-xl border border-primary/20' : 'bg-white border border-gray-200 shadow-lg'}`}>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h4 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Submission Trends</h4>
                  <p className={`text-xs ${theme === 'dark' ? 'text-white/40' : 'text-gray-500'}`}>Monthly submission growth analysis</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-lg">
                  <span className="size-2 rounded-full bg-primary"></span>
                  <span className="text-[10px] font-bold text-primary uppercase">Growth: +15%</span>
                </div>
              </div>
              <div className="flex-1 min-h-[240px] flex flex-col">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 150">
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor: 'rgba(154, 40, 235, 0.3)', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: 'rgba(154, 40, 235, 0)', stopOpacity: 0}} />
                    </linearGradient>
                  </defs>
                  {/* Area Fill */}
                  <path d="M0 120 C 50 110, 100 140, 150 100 S 250 20, 300 60 S 400 10, 500 40 V 150 H 0 Z" fill="url(#lineGrad)" />
                  {/* Line */}
                  <path d="M0 120 C 50 110, 100 140, 150 100 S 250 20, 300 60 S 400 10, 500 40" fill="none" stroke="#9a28eb" strokeWidth="3" />
                  {/* Data Points */}
                  <circle cx="150" cy="100" r="4" fill="#9a28eb" />
                  <circle cx="300" cy="60" r="4" fill="#9a28eb" />
                  <circle cx="500" cy="40" r="4" fill="#9a28eb" />
                </svg>
                <div className="flex justify-between mt-4 px-1">
                  {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'].map((month) => (
                    <span key={month} className={`text-[10px] font-bold ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'}`}>{month}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard Table */}
          <div className={`rounded-xl overflow-hidden transition-all duration-300 ${theme === 'dark' ? 'bg-[rgba(30,20,40,0.6)] backdrop-blur-xl border border-primary/20' : 'bg-white border border-gray-200 shadow-lg'}`}>
            <div className={`p-6 border-b flex justify-between items-center ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
              <div>
                <h4 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Top Performing Students</h4>
                <p className={`text-xs ${theme === 'dark' ? 'text-white/40' : 'text-gray-500'}`}>Leaderboard based on total approved activity points</p>
              </div>
              <button className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-sm font-bold hover:brightness-110 transition-all text-white">
                <span className="material-symbols-outlined !text-sm">download</span>
                Export Report
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className={`text-[10px] font-bold uppercase tracking-widest ${theme === 'dark' ? 'bg-white/5 text-white/50' : 'bg-gray-50 text-gray-500'}`}>
                  <tr>
                    <th className="px-6 py-4">Rank</th>
                    <th className="px-6 py-4">Student</th>
                    <th className="px-6 py-4">Department</th>
                    <th className="px-6 py-4">Total Points</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Trend</th>
                  </tr>
                </thead>
                <tbody className={`${theme === 'dark' ? 'divide-y divide-white/5' : 'divide-y divide-gray-200'}`}>
                  {topStudents.map((student) => (
                    <tr key={student.rank} className={`transition-colors ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}>
                      <td className="px-6 py-4 font-bold text-primary">#{student.rank}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`size-8 rounded-full p-0.5 ${student.rank === 1 ? 'bg-gradient-to-br from-[#0e21a0] to-[#9929ea]' : theme === 'dark' ? 'bg-white/10' : 'bg-gray-200'}`}>
                            <img className={`rounded-full ${theme === 'dark' ? 'bg-[#1a1121]' : 'bg-white'}`} src={student.avatar} alt={student.name} />
                          </div>
                          <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{student.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${theme === 'dark' ? 'bg-white/5 text-white/70' : 'bg-gray-100 text-gray-700'}`}>{student.department}</span>
                      </td>
                      <td className={`px-6 py-4 font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{student.points.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <div className={`flex items-center gap-2 text-xs font-bold ${student.status === 'At Risk' ? 'text-orange-400' : 'text-[#0bda76]'}`}>
                          <span className={`size-2 rounded-full ${student.status === 'At Risk' ? 'bg-orange-400' : 'bg-[#0bda76]'} ${student.rank === 1 && student.status === 'On Track' ? 'animate-pulse' : ''}`}></span>
                          {student.status}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`material-symbols-outlined ${student.trend === 'up' ? 'text-[#0bda76]' : student.trend === 'down' ? 'text-orange-400' : theme === 'dark' ? 'text-white/20' : 'text-gray-300'}`}>
                          {student.trend === 'up' ? 'trending_up' : student.trend === 'down' ? 'trending_down' : 'horizontal_rule'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={`p-4 text-center ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
              <button className="text-primary text-sm font-bold hover:underline">View Full Leaderboard</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReportsAnalytics;
