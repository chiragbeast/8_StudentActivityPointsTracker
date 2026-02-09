import { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminUserManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState('dark');

  const students = [
    {
      id: 1,
      name: 'Alexander Wright',
      email: 'a.wright@sapt.com',
      totalPoints: 1450,
      department: 'Computer Science & Engineering',
      status: 'active',
      lastActive: '2 mins ago',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      name: 'Sarah Jenkins',
      email: 's.jenkins@sapt.com',
      totalPoints: 1120,
      department: 'Electronics & Communication',
      status: 'active',
      lastActive: '5 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: 3,
      name: 'Marcus Thorne',
      email: 'm.thorne@sapt.com',
      totalPoints: 980,
      department: 'Mechanical Engineering',
      status: 'active',
      lastActive: 'Yesterday',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
      id: 4,
      name: 'Elena Rodriguez',
      email: 'e.rod@sapt.com',
      totalPoints: 750,
      department: 'Civil Engineering',
      status: 'deactivated',
      lastActive: '2 weeks ago',
      avatar: null
    },
    {
      id: 5,
      name: 'David Kim',
      email: 'd.kim@sapt.com',
      totalPoints: 1350,
      department: 'Electrical & Electronics',
      status: 'active',
      lastActive: '3 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=33'
    },
    {
      id: 6,
      name: 'Priya Sharma',
      email: 'p.sharma@sapt.com',
      totalPoints: 1580,
      department: 'Computer Science & Engineering',
      status: 'active',
      lastActive: '1 hour ago',
      avatar: 'https://i.pravatar.cc/150?img=25'
    },
    {
      id: 7,
      name: 'James Wilson',
      email: 'j.wilson@sapt.com',
      totalPoints: 890,
      department: 'Chemical Engineering',
      status: 'active',
      lastActive: '4 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=15'
    },
    {
      id: 8,
      name: 'Aisha Patel',
      email: 'a.patel@sapt.com',
      totalPoints: 1240,
      department: 'Biotechnology',
      status: 'pending',
      lastActive: '2 days ago',
      avatar: 'https://i.pravatar.cc/150?img=45'
    },
    {
      id: 9,
      name: 'Ryan Cooper',
      email: 'r.cooper@sapt.com',
      totalPoints: 1095,
      department: 'Materials Science & Engineering',
      status: 'active',
      lastActive: '30 mins ago',
      avatar: 'https://i.pravatar.cc/150?img=52'
    },
    {
      id: 10,
      name: 'Lakshmi Nair',
      email: 'l.nair@sapt.com',
      totalPoints: 1670,
      department: 'Production Engineering',
      status: 'active',
      lastActive: '15 mins ago',
      avatar: 'https://i.pravatar.cc/150?img=38'
    }
  ];

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
          <Link 
            to="/admin_dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link 
            to="/admin_student_management"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white"
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
            <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Student Management</h2>
            <div className={`flex items-center gap-2 text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400 bg-[#322839]' : 'text-gray-400 bg-gray-50'}`}>
              <span>Admin</span>
              <span>/</span>
              <span className="text-primary">Students</span>
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
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex flex-col gap-1">
              <h1 className={`text-3xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>User Management</h1>
              <p className={`text-base ${theme === 'dark' ? 'text-[#ad9db9]' : 'text-slate-500'}`}>Manage system access, roles, and assignments for 1,248 active users.</p>
            </div>
            <Link 
              to="/add_new_student"
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#9a28eb] text-white text-sm font-bold rounded-lg shadow-lg shadow-[#9a28eb]/20 hover:bg-[#9a28eb]/90 transition-all transform active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">person_add</span>
              <span>Create New Student</span>
            </Link>
          </div>

          {/* Controls Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
          {/* Search Bar */}
          <div className="lg:col-span-6">
            <div className={`relative flex items-center w-full h-11 rounded-lg border transition-all ${theme === 'dark' ? 'bg-[#322839] border-transparent' : 'bg-white border-slate-200'} ${searchQuery ? 'ring-2 ring-[#9a28eb] ring-opacity-30' : ''}`}>
              <span className={`material-symbols-outlined absolute left-4 ${theme === 'dark' ? 'text-[#ad9db9]' : 'text-slate-400'}`}>search</span>
              <input
                className={`w-full h-full bg-transparent border-none focus:ring-0 pl-11 pr-4 text-sm ${theme === 'dark' ? 'text-white placeholder:text-[#ad9db9]' : 'text-slate-900 placeholder:text-slate-400'}`}
                placeholder="Search by name, email, or department..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          {/* Filters */}
          <div className="lg:col-span-6 flex flex-wrap gap-2">
            <button className={`flex flex-1 md:flex-none items-center justify-between gap-2 px-4 h-11 rounded-lg border text-sm font-medium transition-colors ${theme === 'dark' ? 'bg-[#322839] border-transparent text-white hover:border-[#9a28eb]/50' : 'bg-white border-slate-200 text-slate-700 hover:border-[#9a28eb]/50'}`}>
              <span>Role: All</span>
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <button className={`flex flex-1 md:flex-none items-center justify-between gap-2 px-4 h-11 rounded-lg border text-sm font-medium transition-colors ${theme === 'dark' ? 'bg-[#322839] border-transparent text-white hover:border-[#9a28eb]/50' : 'bg-white border-slate-200 text-slate-700 hover:border-[#9a28eb]/50'}`}>
              <span>Dept: IT</span>
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <button className={`flex flex-1 md:flex-none items-center justify-between gap-2 px-4 h-11 rounded-lg border text-sm font-medium transition-colors ${theme === 'dark' ? 'bg-[#322839] border-transparent text-white hover:border-[#9a28eb]/50' : 'bg-white border-slate-200 text-slate-700 hover:border-[#9a28eb]/50'}`}>
              <span>Status: Active</span>
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <button className={`flex items-center justify-center w-11 h-11 rounded-lg border transition-colors ${theme === 'dark' ? 'bg-[#322839] border-transparent text-white hover:text-[#9a28eb]' : 'bg-white border-slate-200 text-slate-500 hover:text-[#9a28eb]'}`}>
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </div>

        {/* User Table */}
        <div className={`rounded-xl border overflow-hidden flex flex-col shadow-xl ${theme === 'dark' ? 'bg-[#251b2d] border-[#322839] shadow-black/20' : 'bg-white border-slate-200 shadow-black/5'}`}>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={`text-[12px] uppercase tracking-wider font-bold ${theme === 'dark' ? 'bg-[#322839]/50 text-[#ad9db9]' : 'bg-slate-50 text-slate-500'}`}>
                  <th className={`px-6 py-4 border-b ${theme === 'dark' ? 'border-[#322839]' : 'border-slate-200'}`}>Name & Identity</th>
                  <th className={`px-6 py-4 border-b ${theme === 'dark' ? 'border-[#322839]' : 'border-slate-200'}`}>Total Points</th>
                  <th className={`px-6 py-4 border-b ${theme === 'dark' ? 'border-[#322839]' : 'border-slate-200'}`}>Department</th>
                  <th className={`px-6 py-4 border-b ${theme === 'dark' ? 'border-[#322839]' : 'border-slate-200'}`}>Status</th>
                  <th className={`px-6 py-4 border-b ${theme === 'dark' ? 'border-[#322839]' : 'border-slate-200'}`}>Last Active</th>
                  <th className={`px-6 py-4 border-b text-right ${theme === 'dark' ? 'border-[#322839]' : 'border-slate-200'}`}>Actions</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${theme === 'dark' ? 'divide-[#322839]' : 'divide-slate-100'}`}>
                {students.map((student) => (
                  <tr key={student.id} className={`transition-colors ${theme === 'dark' ? 'hover:bg-[#9a28eb]/5' : 'hover:bg-[#9a28eb]/5'}`}>
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-full bg-[#9a28eb]/20 flex items-center justify-center overflow-hidden border border-[#9a28eb]/30">
                          {student.avatar ? (
                            <img className="w-full h-full object-cover" src={student.avatar} alt={student.name} />
                          ) : (
                            <span className="material-symbols-outlined text-slate-400">person</span>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-sm font-semibold leading-none ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{student.name}</span>
                          <span className={`text-xs ${theme === 'dark' ? 'text-[#ad9db9]' : 'text-slate-500'}`}>{student.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <span className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{student.totalPoints}</span>
                      <span className={`text-xs ml-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>pts</span>
                    </td>
                    <td className="px-6 py-3">
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{student.department}</span>
                    </td>
                    <td className="px-6 py-3">
                      <div className={`flex items-center gap-2 ${student.status === 'deactivated' ? 'opacity-50' : ''}`}>
                        <div className={`size-1.5 rounded-full ${student.status === 'active' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-slate-500'}`}></div>
                        <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                          {student.status === 'active' ? 'Active' : 'Deactivated'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <span className={`text-xs ${theme === 'dark' ? 'text-[#ad9db9]' : 'text-slate-500'}`}>{student.lastActive}</span>
                    </td>
                    <td className="px-6 py-3 text-right">
                      <div className="flex justify-end gap-2">
                        <Link 
                          to={`/edit_student/${student.id}`}
                          className="p-1.5 hover:bg-[#9a28eb]/10 rounded transition-colors text-slate-400 hover:text-[#9a28eb]" 
                          title="Edit Student"
                        >
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className={`px-6 py-4 flex items-center justify-between border-t ${theme === 'dark' ? 'bg-[#322839]/30 border-[#322839]' : 'bg-slate-50 border-slate-200'}`}>
            <span className={`text-sm ${theme === 'dark' ? 'text-[#ad9db9]' : 'text-slate-500'}`}>Showing 1-10 of 1,248 students</span>
            <div className="flex items-center gap-1">
              <button className={`flex items-center justify-center size-8 rounded border transition-colors disabled:opacity-30 ${theme === 'dark' ? 'border-[#322839] text-slate-400 hover:text-[#9a28eb]' : 'border-slate-200 text-slate-400 hover:text-[#9a28eb]'}`} disabled>
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="flex items-center justify-center size-8 rounded bg-[#9a28eb] text-white text-sm font-bold">1</button>
              <button className={`flex items-center justify-center size-8 rounded border text-sm font-medium transition-colors ${theme === 'dark' ? 'border-[#322839] text-[#ad9db9] hover:bg-[#9a28eb]/10' : 'border-slate-200 text-slate-600 hover:bg-[#9a28eb]/10'}`}>2</button>
              <button className={`flex items-center justify-center size-8 rounded border text-sm font-medium transition-colors ${theme === 'dark' ? 'border-[#322839] text-[#ad9db9] hover:bg-[#9a28eb]/10' : 'border-slate-200 text-slate-600 hover:bg-[#9a28eb]/10'}`}>3</button>
              <span className="px-2 text-slate-400">...</span>
              <button className={`flex items-center justify-center size-8 rounded border text-sm font-medium transition-colors ${theme === 'dark' ? 'border-[#322839] text-[#ad9db9] hover:bg-[#9a28eb]/10' : 'border-slate-200 text-slate-600 hover:bg-[#9a28eb]/10'}`}>125</button>
              <button className={`flex items-center justify-center size-8 rounded border transition-colors ${theme === 'dark' ? 'border-[#322839] text-slate-400 hover:text-[#9a28eb]' : 'border-slate-200 text-slate-400 hover:text-[#9a28eb]'}`}>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* System Stats Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="p-4 rounded-xl bg-[#9a28eb]/5 border border-[#9a28eb]/10 flex items-center gap-4">
            <div className="size-10 rounded-lg bg-[#9a28eb]/20 flex items-center justify-center text-[#9a28eb]">
              <span className="material-symbols-outlined">group</span>
            </div>
            <div>
              <p className={`text-[10px] uppercase font-bold tracking-widest ${theme === 'dark' ? 'text-[#ad9db9]' : 'text-slate-500'}`}>Total Active Students</p>
              <p className={`text-xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>1,248</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-4">
            <div className="size-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-500">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <div>
              <p className={`text-[10px] uppercase font-bold tracking-widest ${theme === 'dark' ? 'text-[#ad9db9]' : 'text-slate-500'}`}>Logged in Today</p>
              <p className={`text-xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>412</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 flex items-center gap-4">
            <div className="size-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-500">
              <span className="material-symbols-outlined">hourglass_empty</span>
            </div>
            <div>
              <p className={`text-[10px] uppercase font-bold tracking-widest ${theme === 'dark' ? 'text-[#ad9db9]' : 'text-slate-500'}`}>Pending Approvals</p>
              <p className={`text-xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>28</p>
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default AdminUserManagement;
