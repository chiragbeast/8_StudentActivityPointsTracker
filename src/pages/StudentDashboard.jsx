import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function StudentDashboard({ theme: initialTheme = 'dark' }) {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [theme, setTheme] = useState(initialTheme)

  const isDark = theme === 'dark'

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // Theme-specific classes
  const themeClasses = {
    bg: isDark ? 'bg-background-dark' : 'bg-white',
    text: isDark ? 'text-white' : 'text-gray-900',
    textSecondary: isDark ? 'text-slate-400' : 'text-gray-500',
    sidebar: isDark ? 'bg-[#050307]' : 'bg-gray-200',
    sidebarBorder: isDark ? 'border-white/5' : 'border-gray-300',
    glassCard: isDark ? 'glass-card-dark' : 'glass-card-light',
    hover: isDark ? 'hover:bg-white/5 hover:text-white' : 'hover:bg-gray-200 hover:text-gray-900',
    tableRow: isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-gray-50/50',
    tableBorder: isDark ? 'divide-white/5 border-white/5' : 'divide-gray-100 border-gray-200',
    ring: isDark ? 'bg-background-dark' : 'bg-white',
    ringBorder: isDark ? 'border-white/5' : 'border-gray-100',
    progressBarBg: isDark ? 'bg-white/5' : 'bg-gray-100',
    notifBg: isDark ? 'bg-glass' : 'bg-gray-100',
    notifBorder: isDark ? 'border-white/5' : 'border-gray-200',
    notifIcon: isDark ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-gray-900',
    shadow: isDark ? 'violet-glow' : 'subtle-shadow',
  }

  const recentSubmissions = [
    {
      id: 1,
      name: 'Open Source Hackathon',
      date: 'Oct 24, 2023',
      category: 'Tech',
      categoryColor: 'blue',
      points: '+50',
      status: 'Pending',
      statusColor: 'primary'
    },
    {
      id: 2,
      name: 'Blood Donation Camp',
      date: 'Oct 18, 2023',
      category: 'Social',
      categoryColor: 'green',
      points: '+30',
      status: 'Approved',
      statusColor: 'green'
    },
    {
      id: 3,
      name: 'Inter-college Debate',
      date: 'Oct 12, 2023',
      category: 'Cultural',
      categoryColor: 'orange',
      points: '+25',
      status: 'Approved',
      statusColor: 'green'
    }
  ]

  const getCategoryBadgeClass = (color) => {
    const baseClass = 'text-xs px-2 py-1 rounded border font-medium'
    if (isDark) {
      const colors = {
        blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        green: 'bg-green-500/10 text-green-400 border-green-500/20',
        orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20'
      }
      return `${baseClass} ${colors[color]}`
    } else {
      const colors = {
        blue: 'bg-blue-100 text-blue-700 border-blue-200',
        green: 'bg-green-100 text-green-700 border-green-200',
        orange: 'bg-orange-100 text-orange-700 border-orange-200'
      }
      return `${baseClass} ${colors[color]}`
    }
  }

  const getStatusBadgeClass = (status, color) => {
    const baseClass = 'inline-flex items-center gap-2 font-bold text-xs tracking-tight px-3 py-1 rounded-full border'
    if (status === 'Pending') {
      return isDark 
        ? `${baseClass} text-primary bg-primary/10 border-primary/20 ${themeClasses.shadow} animate-pulse`
        : `${baseClass} text-primary bg-primary/30 border-primary/40`
    } else {
      return isDark
        ? `${baseClass} text-green-400 bg-green-500/10 border-green-500/20`
        : `${baseClass} text-green-700 bg-green-100 border-green-200`
    }
  }

  return (
    <div className={`${themeClasses.bg} ${themeClasses.text} min-h-screen flex font-display`}>
      {/* Sidebar Navigation */}
      <aside className={`w-72 ${themeClasses.sidebar} border-r ${themeClasses.sidebarBorder} flex flex-col h-screen sticky top-0`}>
        <div className="p-6 flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white ${themeClasses.shadow}`}>
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <div>
            <h1 className={`text-lg font-bold tracking-tight ${themeClasses.text} leading-none`}>SAPT</h1>
            <p className={`text-[10px] uppercase tracking-widest ${themeClasses.textSecondary} font-bold mt-1`}>Student Portal</p>
          </div>
        </div>

        <nav className="flex-1 px-4 mt-4 flex flex-col gap-2">
          <a 
            className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white ${themeClasses.shadow} transition-all`}
            href="#"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a 
            className={`flex items-center gap-3 px-4 py-3 rounded-xl ${themeClasses.textSecondary} ${themeClasses.hover} transition-all`}
            href="#"
          >
            <span className="material-symbols-outlined">monitoring</span>
            <span className="text-sm font-medium">Activities</span>
          </a>
          <a 
            className={`flex items-center gap-3 px-4 py-3 rounded-xl ${themeClasses.textSecondary} ${themeClasses.hover} transition-all`}
            href="#"
          >
            <span className="material-symbols-outlined">description</span>
            <span className="text-sm font-medium">Submissions</span>
          </a>
          <a 
            className={`flex items-center gap-3 px-4 py-3 rounded-xl ${themeClasses.textSecondary} ${themeClasses.hover} transition-all`}
            href="#"
          >
            <span className="material-symbols-outlined">pie_chart</span>
            <span className="text-sm font-medium">Analytics</span>
          </a>
          <div className={`my-4 border-t ${themeClasses.sidebarBorder}`}></div>
          <a 
            className={`flex items-center gap-3 px-4 py-3 rounded-xl ${themeClasses.textSecondary} ${themeClasses.hover} transition-all`}
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </a>
        </nav>

        <div className="p-4">
          <button className={`w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all ${themeClasses.shadow}`}>
            <span className="material-symbols-outlined text-sm">add</span>
            <span className="text-sm">New Submission</span>
          </button>
        </div>

        <div className={`p-6 border-t ${themeClasses.sidebarBorder}`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full ${isDark ? 'bg-slate-800 border-white/10' : 'bg-gray-300 border-gray-400'} border overflow-hidden`}>
              <img 
                alt="Student Profile" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs2Uq2R2HABxou3gm818LEqkJXef9jvM8xyyGQRe4H85h7kHbru-40FTVy-B7xTUfxo6XlyQAOb4U9BhbNp5vtimZ9XyMll_DNEQsM3upziJFuyOHf0H0usaLXZBVCtbRor8HSFfxt4FFZEpucJ6XnJ36OjtC4lBot5xPm9L8RTZ23H-5XBxmQkcMXyL1hi8HCwYv72-yNBSxVeNVzWwT2QzANbGZCNb_uiyHR2pCrWp6BR5Vo_JKOKK7Esty1Vlv4N4v1RQfLFvLC"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className={`text-sm font-semibold ${themeClasses.text}`}>Alex Rivera</p>
              <p className={`text-xs ${themeClasses.textSecondary}`}>CS Senior</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={`flex-1 p-8 lg:p-12 overflow-y-auto ${isDark ? '' : 'bg-white'}`}>
        {/* Header */}
        <header className="flex justify-between items-end mb-10">
          <div>
            <h2 className={`text-4xl font-extrabold ${themeClasses.text} tracking-tight`}>Welcome back, Alex!</h2>
            <p className={`${themeClasses.textSecondary} mt-2 font-medium`}>You're making great progress towards your graduation goal.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className={`relative p-2 ${themeClasses.notifBg} rounded-full border ${themeClasses.notifBorder} cursor-pointer ${themeClasses.notifIcon} transition-colors`}>
              <span className="material-symbols-outlined">notifications</span>
              <span className={`absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border ${isDark ? 'border-background-dark' : 'border-white'}`}></span>
            </div>
            
            {/* Theme Toggle */}
            <div className="flex items-center gap-3">
              <span className={`text-xs font-medium ${themeClasses.textSecondary}`}>Theme</span>
              <button
                onClick={toggleTheme}
                className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${isDark ? 'bg-primary' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 ${isDark ? 'right-1' : 'left-1'} w-5 h-5 rounded-full bg-white transition-all duration-300 flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-xs text-gray-700">
                    {isDark ? 'dark_mode' : 'light_mode'}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Hero Stat: Total Points */}
          <div className={`lg:col-span-2 ${themeClasses.glassCard} rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group`}>
            <div className={`absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 ${isDark ? 'bg-primary/20' : 'bg-primary/5'} rounded-full blur-3xl ${isDark ? 'group-hover:bg-primary/30' : 'group-hover:bg-primary/10'} transition-all`}></div>
            <div className="flex justify-between items-start relative z-10">
              <div>
                <p className={`${themeClasses.textSecondary} font-medium text-lg`}>Total Activity Points</p>
                <h3 className={`text-7xl font-black ${themeClasses.text} mt-2 tracking-tighter`}>1,625</h3>
              </div>
              <div className={`${isDark ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-green-100 text-green-700 border-green-200'} px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 border`}>
                <span className="material-symbols-outlined text-sm">trending_up</span>
                +15%
              </div>
            </div>
            <div className="mt-8 relative z-10">
              <div className="flex justify-between mb-2">
                <span className={`text-sm font-medium ${themeClasses.textSecondary}`}>Monthly Progress</span>
                <span className={`text-sm font-bold ${themeClasses.text}`}>+120 pts this month</span>
              </div>
              <div className={`w-full h-3 ${themeClasses.progressBarBg} rounded-full overflow-hidden`}>
                <div className="h-full bg-gradient-to-r from-blue-600 to-primary rounded-full" style={{width: '65%'}}></div>
              </div>
            </div>
          </div>

          {/* Graduation Progress Ring */}
          <div className={`${themeClasses.glassCard} rounded-xl p-8 flex flex-col items-center justify-center text-center`}>
            <p className={`${themeClasses.textSecondary} font-medium mb-6`}>Graduation Progress</p>
            <div className="relative w-40 h-40">
              <div className={`absolute inset-0 rounded-full border-[10px] ${themeClasses.ringBorder}`}></div>
              <div className={`absolute inset-0 rounded-full ${isDark ? 'progress-ring' : 'progress-ring-light'} ${isDark ? 'shadow-[0_0_20px_rgba(154,40,235,0.2)]' : 'shadow-sm'}`}></div>
              <div className={`absolute inset-[10px] ${themeClasses.ring} rounded-full flex flex-col items-center justify-center`}>
                <span className={`text-3xl font-black ${themeClasses.text}`}>75%</span>
                <span className={`text-[10px] uppercase tracking-tighter ${themeClasses.textSecondary} font-bold`}>Complete</span>
              </div>
            </div>
            <p className={`mt-6 text-sm ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              <span className={`font-bold ${themeClasses.text}`}>375 points</span> remaining to reach the 2000 goal
            </p>
          </div>
        </div>

        {/* Secondary Charts & Submissions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Donut Chart Widget */}
          <div className={`lg:col-span-5 ${themeClasses.glassCard} rounded-xl p-8`}>
            <div className="flex justify-between items-center mb-8">
              <h4 className={`text-xl font-bold ${themeClasses.text}`}>Points Distribution</h4>
              <span className={`material-symbols-outlined ${themeClasses.textSecondary} cursor-help`}>info</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="relative w-36 h-36 flex-shrink-0">
                <div className="absolute inset-0 rounded-full donut-gradient"></div>
                <div className={`absolute inset-6 ${isDark ? 'bg-background-dark/80 backdrop-blur' : 'bg-white'} rounded-full`}></div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <div className="flex-1">
                    <p className={`text-xs ${themeClasses.textSecondary} font-medium`}>Institute</p>
                    <p className={`text-lg font-bold ${themeClasses.text}`}>975 pts <span className={`text-xs ${themeClasses.textSecondary}`}>(60%)</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-800"></div>
                  <div className="flex-1">
                    <p className={`text-xs ${themeClasses.textSecondary} font-medium`}>Department</p>
                    <p className={`text-lg font-bold ${themeClasses.text}`}>650 pts <span className={`text-xs ${themeClasses.textSecondary}`}>(40%)</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`mt-10 p-4 rounded-xl ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-200'} border flex items-center justify-between`}>
              <div>
                <p className={`text-xs ${themeClasses.textSecondary} uppercase font-bold`}>Lifetime Ratio</p>
                <p className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-gray-700'}`}>Excellent balance</p>
              </div>
              <span className="material-symbols-outlined text-primary">verified</span>
            </div>
          </div>

          {/* Recent Submissions Table */}
          <div className={`lg:col-span-7 ${themeClasses.glassCard} rounded-xl p-0 overflow-hidden`}>
            <div className={`p-8 border-b ${themeClasses.tableBorder} flex justify-between items-center`}>
              <h4 className={`text-xl font-bold ${themeClasses.text}`}>Recent Submissions</h4>
              <button className="text-sm font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className={`${isDark ? 'bg-white/[0.02]' : 'bg-gray-50'} text-xs uppercase tracking-widest ${themeClasses.textSecondary}`}>
                  <tr>
                    <th className="px-8 py-4 font-bold">Activity</th>
                    <th className="px-6 py-4 font-bold">Category</th>
                    <th className="px-6 py-4 font-bold">Points</th>
                    <th className="px-8 py-4 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className={`${themeClasses.tableBorder.split(' ')[0]}`}>
                  {recentSubmissions.map((submission) => (
                    <tr key={submission.id} className={`${themeClasses.tableRow} transition-colors cursor-pointer`}>
                      <td className="px-8 py-5">
                        <p className={`text-sm font-semibold ${themeClasses.text}`}>{submission.name}</p>
                        <p className={`text-xs ${themeClasses.textSecondary}`}>{submission.date}</p>
                      </td>
                      <td className="px-6 py-5">
                        <span className={getCategoryBadgeClass(submission.categoryColor)}>{submission.category}</span>
                      </td>
                      <td className={`px-6 py-5 font-bold ${themeClasses.text}`}>{submission.points}</td>
                      <td className="px-8 py-5">
                        <div className={getStatusBadgeClass(submission.status, submission.statusColor)}>
                          <div className={`w-1.5 h-1.5 rounded-full ${submission.status === 'Pending' ? 'bg-primary' : isDark ? 'bg-green-400' : 'bg-green-600'}`}></div>
                          {submission.status}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
