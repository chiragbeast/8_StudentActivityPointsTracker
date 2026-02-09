import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [theme, setTheme] = useState('dark')

  const admins = [
    {
      id: 1,
      name: 'Marcus Wood',
      email: 'm.wood@sapt.com',
      role: 'Administrator',
      roleColor: 'primary',
      status: 'Active',
      lastLogin: '5 mins ago',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbvbHPFVZubwKGmZmftqnUPsZZLgZ10ao8KO8teky2iNOWzsQ22s7oCIMTHs5zXjW7w55J09DMKHE8-IwYDDz4ms8M6MHkxqscTFYnQI4Om2mOV2oYkim1Ri9DIwDYlNXppUJ32PvybnoBtKZYoudC_b69RY0NYMsRZ_STdEY1olUag-0tdo2e1aHkSAVUADXWRHtA6srslzAqL3Z-CCYj40cR1ZwzNwvMAmDoecnLa_Q6qkWbDFKTo6YBdJP4Wz3291kbfkaIrRtB'
    },
    {
      id: 2,
      name: 'Alex Thompson',
      email: 'alex.t@sapt.com',
      role: 'Administrator',
      roleColor: 'primary',
      status: 'Active',
      lastLogin: '1 hour ago',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
      id: 3,
      name: 'Jessica Park',
      email: 'jessica.p@sapt.com',
      role: 'Administrator',
      roleColor: 'primary',
      status: 'Active',
      lastLogin: '3 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=45'
    }
  ]

  const getRoleBadgeClass = (roleColor, theme) => {
    if (roleColor === 'primary') {
      return 'text-xs font-medium text-primary px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20'
    }
    return theme === 'dark' 
      ? 'text-xs font-medium text-slate-400 px-2.5 py-1 rounded-md bg-white/5 border border-white/10'
      : 'text-xs font-medium text-gray-700 px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200'
  }

  return (
    <div className={`min-h-screen flex font-display transition-colors duration-300 ${theme === 'dark' ? 'bg-[#1a1121]' : 'bg-white'}`}>
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
          <a 
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white"
            href="#"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
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
          <Link 
            to="/reports_analytics"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined">assessment</span>
            <span className="text-sm font-medium">Reports</span>
          </Link>
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
      <main className={`flex-1 flex flex-col overflow-y-auto transition-colors duration-300 ${theme === 'dark' ? 'bg-[#1a1121]' : 'bg-white'}`}>
        {/* Header */}
        <header className={`h-16 border-b flex items-center justify-between px-8 sticky top-0 z-10 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#1a1121] border-[#322839]' : 'bg-white border-gray-100'}`}>
          <div className="flex items-center gap-4">
            <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Dashboard</h2>
            <div className={`flex items-center gap-2 text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400 bg-[#322839]' : 'text-gray-400 bg-gray-50'}`}>
              <span>Admin</span>
              <span>/</span>
              <span className="text-primary">Overview</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`flex items-center justify-center rounded-xl h-10 px-4 transition-colors ${theme === 'dark' ? 'bg-[#322839] text-white hover:bg-[#3d2f47]' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
              >
                <span className="material-symbols-outlined">
                  {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
              <button className={`w-10 h-10 rounded-xl transition-colors flex items-center justify-center relative ${theme === 'dark' ? 'bg-[#322839] text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}>
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
              </button>
              <div className={`h-8 w-px ${theme === 'dark' ? 'bg-[#322839]' : 'bg-gray-100'}`}></div>
              <div className="flex items-center gap-3 pl-2">
                <div className="text-right">
                  <p className={`text-sm font-semibold leading-none ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Alex Rivera</p>
                  <p className={`text-[10px] font-medium uppercase mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-400'}`}>Super Admin</p>
                </div>
                <Link
                  to="/profile_settings"
                  className="w-10 h-10 rounded-xl bg-center bg-cover border-2 border-primary/10 cursor-pointer hover:border-primary/30 transition-colors"
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYMr_aTJTIdnOHkC7jwthPwMQwaMH5BrVDlggRIs3vgT0nQFIkV8PcQyGv8w86IaWHGGgkTD5MIBd5vab2EeXdaZbO-XdNL0qmzro7SvfCTj89LSRyS1aCzC9Vu1gJ64JLK6am2mZvQlSy6NlzsFwt2cbMKUbA1q7wWlb4nrBxuP0zseg7ViTbHupx3DQtI_n1pGfgYW-tLzi3ubmnmFGZR2Op7siligH7d-nueHknsMSgP77d2oui46F4VIpuCgEyw_kMHp1qmTuA')"}}
                ></Link>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Card 1 */}
            <div className={`p-6 rounded-xl border glow-card relative overflow-hidden group transition-colors duration-300 ${theme === 'dark' ? 'bg-gradient-to-br from-primary/20 to-[#251b2d] border-primary/30' : 'bg-gradient-to-br from-primary/10 to-white border-primary/20'}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-primary text-white">
                  <span className="material-symbols-outlined">people</span>
                </div>
                <span className="text-emerald-500 text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  +12.5%
                </span>
              </div>
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Total Students</p>
              <h3 className={`text-3xl font-bold mt-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>12,482</h3>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            </div>

            {/* Card 2 */}
            <div className={`p-6 rounded-xl border glow-card relative overflow-hidden group transition-colors duration-300 ${theme === 'dark' ? 'bg-gradient-to-br from-indigo-500/20 to-[#251b2d] border-indigo-500/30' : 'bg-gradient-to-br from-indigo-50 to-white border-indigo-100'}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-indigo-600 text-white">
                  <span className="material-symbols-outlined">speed</span>
                </div>
                <span className="text-emerald-500 text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  +0.02%
                </span>
              </div>
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>System Uptime</p>
              <h3 className={`text-3xl font-bold mt-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>99.98%</h3>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-600/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            </div>

            {/* Card 3 */}
            <div className={`p-6 rounded-xl border glow-card relative overflow-hidden group transition-colors duration-300 ${theme === 'dark' ? 'bg-gradient-to-br from-purple-500/20 to-[#251b2d] border-purple-500/30' : 'bg-gradient-to-br from-purple-50 to-white border-purple-100'}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-purple-600 text-white">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <span className="text-rose-500 text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">trending_down</span>
                  -5.1%
                </span>
              </div>
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Active Sessions</p>
              <h3 className={`text-3xl font-bold mt-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>1,204</h3>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-600/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            </div>

            {/* Card 4 */}
            <div className={`p-6 rounded-xl border glow-card relative overflow-hidden group transition-colors duration-300 ${theme === 'dark' ? 'bg-gradient-to-br from-blue-500/20 to-[#251b2d] border-blue-500/30' : 'bg-gradient-to-br from-blue-50 to-white border-blue-100'}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-blue-600 text-white">
                  <span className="material-symbols-outlined">warning</span>
                </div>
                <span className="text-emerald-500 text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">trending_down</span>
                  -0.02%
                </span>
              </div>
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Error Rate</p>
              <h3 className={`text-3xl font-bold mt-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>0.04%</h3>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          </div>

          {/* Chart and Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* System Performance Chart */}
            <div className={`lg:col-span-2 p-6 rounded-xl border shadow-sm transition-colors duration-300 ${theme === 'dark' ? 'bg-[#251b2d] border-[#322839]' : 'bg-white border-gray-100'}`}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>System Performance Overview</h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>Real-time resource allocation and traffic analysis</p>
                </div>
                <div className={`flex p-1 rounded-lg ${theme === 'dark' ? 'bg-[#322839]' : 'bg-gray-50'}`}>
                  <button className={`px-3 py-1 text-xs font-semibold rounded shadow-sm ${theme === 'dark' ? 'bg-primary text-white' : 'bg-white text-gray-900'}`}>24h</button>
                  <button className={`px-3 py-1 text-xs font-semibold ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>7d</button>
                  <button className={`px-3 py-1 text-xs font-semibold ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>30d</button>
                </div>
              </div>
              {/* Chart */}
              <div className={`relative h-64 w-full rounded-lg flex items-end px-4 gap-2 pb-2 ${theme === 'dark' ? 'bg-[#322839]' : 'bg-gray-50'}`}>
                {/* Grid Lines */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className={`border-t w-full h-px ${theme === 'dark' ? 'border-[#3d2f47]' : 'border-gray-200'}`}></div>
                  <div className={`border-t w-full h-px ${theme === 'dark' ? 'border-[#3d2f47]' : 'border-gray-200'}`}></div>
                  <div className={`border-t w-full h-px ${theme === 'dark' ? 'border-[#3d2f47]' : 'border-gray-200'}`}></div>
                  <div className={`border-t w-full h-px ${theme === 'dark' ? 'border-[#3d2f47]' : 'border-gray-200'}`}></div>
                </div>
                {/* Bars */}
                {[40, 60, 30, 80, 55, 40, 75, 90].map((height, idx) => (
                  <div key={idx} className="w-full bg-primary/20 rounded-t group relative" style={{height: `${height}%`}}>
                    <div className={`absolute bottom-0 w-full ${idx % 2 === 0 ? 'bg-primary' : 'bg-blue-600'} rounded-t transition-all duration-300`} style={{height: '50%'}}></div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className={`text-xs font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Electric Purple (Traffic)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                  <span className={`text-xs font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Deep Blue (CPU Load)</span>
                </div>
              </div>
            </div>

            {/* Control Panel */}
            <div className={`p-6 rounded-xl border shadow-sm flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'bg-[#251b2d] border-[#322839]' : 'bg-white border-gray-100'}`}>
              <h4 className={`font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Interactive Control Panel</h4>
              <div className="space-y-6">
                {/* Toggle 1 */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-slate-200' : 'text-gray-800'}`}>Auto-Scaling</p>
                    <p className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-gray-400'}`}>Manage cluster density automatically</p>
                  </div>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox"/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                {/* Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-slate-200' : 'text-gray-800'}`}>Resource Threshold</p>
                    <p className="text-xs font-bold text-primary">85%</p>
                  </div>
                  <input className={`w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-primary ${theme === 'dark' ? 'bg-[#322839]' : 'bg-gray-100'}`} max="100" min="0" type="range" defaultValue="85"/>
                </div>
                {/* Toggle 2 */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-slate-200' : 'text-gray-800'}`}>Database Backup</p>
                    <p className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-gray-400'}`}>Scheduled daily at 02:00 AM</p>
                  </div>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox"/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
              <button className="w-full mt-auto py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                Deploy System Update
              </button>
            </div>
          </div>

          {/* Admins Table */}
          <div className={`rounded-xl border shadow-sm overflow-hidden mb-8 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#251b2d] border-[#322839]' : 'bg-white border-gray-100'}`}>
            <div className={`p-6 border-b flex items-center justify-between ${theme === 'dark' ? 'border-[#322839]' : 'border-gray-100'}`}>
              <div>
                <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Admins</h4>
              </div>
              <button className={`px-4 py-2 border rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors ${theme === 'dark' ? 'border-[#322839] text-slate-300 hover:bg-[#322839]' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                <span className="material-symbols-outlined text-lg">filter_list</span>
                Filter
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className={`${theme === 'dark' ? 'bg-[#322839]/50' : 'bg-gray-50/50'}`}>
                    <th className={`px-6 py-4 text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>Admin</th>
                    <th className={`px-6 py-4 text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>Role</th>
                    <th className={`px-6 py-4 text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>Status</th>
                    <th className={`px-6 py-4 text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>Last Login</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${theme === 'dark' ? 'divide-[#322839]' : 'divide-gray-100'}`}>
                  {admins.map((admin) => (
                    <tr key={admin.id} className={`transition-colors ${theme === 'dark' ? 'hover:bg-[#322839]/30' : 'hover:bg-gray-50/50'}`}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-9 h-9 rounded-lg bg-gray-200 bg-center bg-cover"
                            style={{backgroundImage: `url('${admin.avatar}')`}}
                          ></div>
                          <div>
                            <p className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{admin.name}</p>
                            <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>{admin.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={getRoleBadgeClass(admin.roleColor, theme)}>{admin.role}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className={`flex items-center gap-1.5 font-semibold text-xs ${admin.status === 'Active' ? 'text-emerald-600' : 'text-gray-400'}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${admin.status === 'Active' ? 'bg-emerald-500' : 'bg-gray-300'}`}></span>
                          {admin.status}
                        </div>
                      </td>
                      <td className={`px-6 py-4 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>{admin.lastLogin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={`p-6 border-t flex items-center justify-between ${theme === 'dark' ? 'bg-[#322839]/30 border-[#322839]' : 'bg-gray-50/50 border-gray-100'}`}>
              <p className={`text-xs font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>Showing 3 of 15 admins</p>
              <div className="flex gap-2">
                <button className={`px-3 py-1 border rounded text-xs font-bold transition-colors ${theme === 'dark' ? 'bg-[#251b2d] border-[#322839] text-slate-400 hover:bg-[#322839]' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>Previous</button>
                <button className={`px-3 py-1 border rounded text-xs font-bold transition-colors ${theme === 'dark' ? 'bg-[#251b2d] border-[#322839] text-slate-400 hover:bg-[#322839]' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>Next</button>
              </div>
            </div>
          </div>

          {/* Footer: System Logs & Server Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* System Logs */}
            <div className={`p-6 rounded-xl border shadow-sm transition-colors duration-300 ${theme === 'dark' ? 'bg-[#251b2d] border-[#322839]' : 'bg-white border-gray-100'}`}>
              <div className="flex items-center justify-between mb-6">
                <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>System Logs</h4>
                <button className="text-primary text-xs font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                <div className={`flex gap-4 p-3 rounded-lg transition-colors border-l-4 border-emerald-500 ${theme === 'dark' ? 'hover:bg-[#322839]/30' : 'hover:bg-gray-50'}`}>
                  <div className="shrink-0 w-8 h-8 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                  </div>
                  <div>
                    <p className={`text-sm font-semibold leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Backup successful</p>
                    <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>Daily system backup completed in 1.2s</p>
                    <p className={`text-[10px] mt-2 ${theme === 'dark' ? 'text-slate-500' : 'text-gray-400'}`}>12:30 PM • Admin Console</p>
                  </div>
                </div>
                <div className={`flex gap-4 p-3 rounded-lg transition-colors border-l-4 border-amber-500 ${theme === 'dark' ? 'hover:bg-[#322839]/30' : 'hover:bg-gray-50'}`}>
                  <div className="shrink-0 w-8 h-8 rounded bg-amber-100 text-amber-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">warning</span>
                  </div>
                  <div>
                    <p className={`text-sm font-semibold leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Node latency spike</p>
                    <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>Cluster node AP-SOUTH-1 reported high latency (250ms)</p>
                    <p className={`text-[10px] mt-2 ${theme === 'dark' ? 'text-slate-500' : 'text-gray-400'}`}>11:15 AM • Cloud Monitor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Server Distribution */}
            <div className={`p-6 rounded-xl border shadow-sm transition-colors duration-300 ${theme === 'dark' ? 'bg-[#251b2d] border-[#322839]' : 'bg-white border-gray-100'}`}>
              <div className="flex items-center justify-between mb-6">
                <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Server Distribution</h4>
                <span className={`text-xs font-medium ${theme === 'dark' ? 'text-slate-500' : 'text-gray-400'}`}>Global Clusters</span>
              </div>
              <div className="flex items-center justify-center py-4">
                <div className={`w-full h-40 rounded-xl relative overflow-hidden flex items-center justify-center ${theme === 'dark' ? 'bg-[#322839]' : 'bg-gray-100'}`}>
                  <span className={`material-symbols-outlined text-6xl ${theme === 'dark' ? 'text-slate-700' : 'text-gray-300'}`}>public</span>
                  <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary rounded-full animate-pulse border-4 border-primary/20"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse border-4 border-primary/20"></div>
                  <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-primary rounded-full animate-pulse border-4 border-primary/20"></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>12</p>
                  <p className={`text-[10px] font-bold uppercase ${theme === 'dark' ? 'text-slate-500' : 'text-gray-400'}`}>Active Clusters</p>
                </div>
                <div className="text-center">
                  <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>842</p>
                  <p className={`text-[10px] font-bold uppercase ${theme === 'dark' ? 'text-slate-500' : 'text-gray-400'}`}>Total Nodes</p>
                </div>
                <div className="text-center">
                  <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>0</p>
                  <p className={`text-[10px] font-bold uppercase ${theme === 'dark' ? 'text-slate-500' : 'text-gray-400'}`}>Offline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
