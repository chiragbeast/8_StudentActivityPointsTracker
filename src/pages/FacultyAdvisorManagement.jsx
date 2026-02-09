import { useState } from 'react';
import { Link } from 'react-router-dom';

const FacultyAdvisorManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState('dark');

  const facultyAdvisors = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      email: 'priya.sharma@nitc.ac.in',
      department: 'Computer Science & Engineering',
      avgPointsPerStudent: 1250,
      assignedStudents: 24,
      status: 'active',
      lastActive: '1 hour ago',
      avatar: 'https://i.pravatar.cc/150?img=10'
    },
    {
      id: 2,
      name: 'Prof. Rajesh Kumar',
      email: 'rajesh.kumar@nitc.ac.in',
      department: 'Electrical Engineering',
      avgPointsPerStudent: 980,
      assignedStudents: 18,
      status: 'active',
      lastActive: '30 mins ago',
      avatar: 'https://i.pravatar.cc/150?img=15'
    },
    {
      id: 3,
      name: 'Dr. Anita Desai',
      email: 'anita.desai@nitc.ac.in',
      department: 'Mechanical Engineering',
      avgPointsPerStudent: 1450,
      assignedStudents: 21,
      status: 'active',
      lastActive: '2 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=20'
    },
    {
      id: 4,
      name: 'Dr. Vikram Singh',
      email: 'vikram.singh@nitc.ac.in',
      department: 'Civil Engineering',
      avgPointsPerStudent: 875,
      assignedStudents: 15,
      status: 'on-leave',
      lastActive: '3 days ago',
      avatar: 'https://i.pravatar.cc/150?img=25'
    },
    {
      id: 5,
      name: 'Prof. Lakshmi Nair',
      email: 'lakshmi.nair@nitc.ac.in',
      department: 'Electronics & Communication',
      avgPointsPerStudent: 1320,
      assignedStudents: 22,
      status: 'active',
      lastActive: '45 mins ago',
      avatar: 'https://i.pravatar.cc/150?img=30'
    },
    {
      id: 6,
      name: 'Dr. Arjun Reddy',
      email: 'arjun.reddy@nitc.ac.in',
      department: 'Chemical Engineering',
      avgPointsPerStudent: 1180,
      assignedStudents: 19,
      status: 'active',
      lastActive: '1 hour ago',
      avatar: 'https://i.pravatar.cc/150?img=35'
    },
    {
      id: 7,
      name: 'Prof. Meera Patel',
      email: 'meera.patel@nitc.ac.in',
      department: 'Biotechnology',
      avgPointsPerStudent: 1090,
      assignedStudents: 17,
      status: 'active',
      lastActive: '3 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=40'
    },
    {
      id: 8,
      name: 'Dr. Sanjay Gupta',
      email: 'sanjay.gupta@nitc.ac.in',
      department: 'Materials Science & Engineering',
      avgPointsPerStudent: 1385,
      assignedStudents: 20,
      status: 'active',
      lastActive: '20 mins ago',
      avatar: 'https://i.pravatar.cc/150?img=45'
    },
    {
      id: 9,
      name: 'Prof. Kavita Malhotra',
      email: 'kavita.malhotra@nitc.ac.in',
      department: 'Production Engineering',
      avgPointsPerStudent: 1510,
      assignedStudents: 23,
      status: 'active',
      lastActive: '15 mins ago',
      avatar: 'https://i.pravatar.cc/150?img=50'
    },
    {
      id: 10,
      name: 'Dr. Ramesh Iyer',
      email: 'ramesh.iyer@nitc.ac.in',
      department: 'Engineering Physics',
      avgPointsPerStudent: 1205,
      assignedStudents: 16,
      status: 'active',
      lastActive: '40 mins ago',
      avatar: 'https://i.pravatar.cc/150?img=55'
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
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Students</span>
          </Link>
          <a 
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white"
            href="#"
          >
            <span className="material-symbols-outlined">school</span>
            <span className="text-sm font-medium">Faculty Advisors</span>
          </a>
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
            <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Faculty Advisors</h2>
            <div className={`flex items-center gap-2 text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400 bg-[#322839]' : 'text-gray-400 bg-gray-50'}`}>
              <span>Admin</span>
              <span>/</span>
              <span className="text-primary">Faculty</span>
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
              <h1 className={`text-3xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Faculty Advisor Management</h1>
              <p className={`text-base ${theme === 'dark' ? 'text-[#ad9db9]' : 'text-slate-500'}`}>Manage faculty advisors, student assignments, and academic mentorship for 86 active advisors.</p>
            </div>
            <Link 
              to="/add_faculty_advisor"
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#9a28eb] text-white text-sm font-bold rounded-lg shadow-lg shadow-[#9a28eb]/20 hover:bg-[#9a28eb]/90 transition-all transform active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">person_add</span>
              <span>Add Faculty Advisor</span>
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
                  placeholder="Search by name, department, or avg points..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            {/* Filters */}
            <div className="lg:col-span-6 flex flex-wrap gap-2">
              <button className={`flex flex-1 md:flex-none items-center justify-between gap-2 px-4 h-11 rounded-lg border text-sm font-medium transition-colors ${theme === 'dark' ? 'bg-[#322839] border-transparent text-white hover:border-[#9a28eb]/50' : 'bg-white border-slate-200 text-slate-700 hover:border-[#9a28eb]/50'}`}>
                <span>Dept: All</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <button className={`flex flex-1 md:flex-none items-center justify-between gap-2 px-4 h-11 rounded-lg border text-sm font-medium transition-colors ${theme === 'dark' ? 'bg-[#322839] border-transparent text-white hover:border-[#9a28eb]/50' : 'bg-white border-slate-200 text-slate-700 hover:border-[#9a28eb]/50'}`}>
                <span>Status: Active</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <button className={`flex flex-1 md:flex-none items-center justify-between gap-2 px-4 h-11 rounded-lg border text-sm font-medium transition-colors ${theme === 'dark' ? 'bg-[#322839] border-transparent text-white hover:border-[#9a28eb]/50' : 'bg-white border-slate-200 text-slate-700 hover:border-[#9a28eb]/50'}`}>
                <span>Sort: Name</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <button className={`flex items-center justify-center w-11 h-11 rounded-lg border transition-colors ${theme === 'dark' ? 'bg-[#322839] border-transparent text-white hover:text-[#9a28eb]' : 'bg-white border-slate-200 text-slate-500 hover:text-[#9a28eb]'}`}>
                <span className="material-symbols-outlined">filter_list</span>
              </button>
            </div>
          </div>

          {/* Faculty Advisors Table */}
          <div className={`rounded-xl border overflow-hidden flex flex-col shadow-xl ${theme === 'dark' ? 'bg-[#251b2d] border-[#322839] shadow-black/20' : 'bg-white border-slate-200 shadow-black/5'}`}>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className={`text-[12px] uppercase tracking-wider font-bold ${theme === 'dark' ? 'bg-[#322839]/50 text-[#ad9db9]' : 'bg-slate-50 text-slate-500'}`}>
                    <th className={`px-6 py-4 border-b ${theme === 'dark' ? 'border-[#322839]' : 'border-slate-200'}`}>Faculty Details</th>
                    <th className={`px-6 py-4 border-b ${theme === 'dark' ? 'border-[#322839]' : 'border-slate-200'}`}>Department</th>
                    <th className={`px-6 py-4 border-b ${theme === 'dark' ? 'border-[#322839]' : 'border-slate-200'}`}>Avg Point Per Student</th>
                    <th className={`px-6 py-4 border-b ${theme === 'dark' ? 'border-[#322839]' : 'border-slate-200'}`}>Assigned Students</th>
                    <th className={`px-6 py-4 border-b ${theme === 'dark' ? 'border-[#322839]' : 'border-slate-200'}`}>Last Active</th>
                    <th className={`px-6 py-4 border-b text-right ${theme === 'dark' ? 'border-[#322839]' : 'border-slate-200'}`}>Actions</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${theme === 'dark' ? 'divide-[#322839]' : 'divide-slate-100'}`}>
                  {facultyAdvisors.map((faculty) => (
                    <tr key={faculty.id} className={`transition-colors ${theme === 'dark' ? 'hover:bg-[#9a28eb]/5' : 'hover:bg-[#9a28eb]/5'}`}>
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-3">
                          <div className="size-9 rounded-full bg-[#9a28eb]/20 flex items-center justify-center overflow-hidden border border-[#9a28eb]/30">
                            {faculty.avatar ? (
                              <img className="w-full h-full object-cover" src={faculty.avatar} alt={faculty.name} />
                            ) : (
                              <span className="material-symbols-outlined text-slate-400">person</span>
                            )}
                          </div>
                          <div className="flex flex-col">
                            <span className={`text-sm font-semibold leading-none ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{faculty.name}</span>
                            <span className={`text-xs ${theme === 'dark' ? 'text-[#ad9db9]' : 'text-slate-500'}`}>{faculty.email}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <span className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{faculty.department}</span>
                      </td>
                      <td className="px-6 py-3">
                        <span className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{faculty.avgPointsPerStudent}</span>
                        <span className={`text-xs ml-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>pts</span>
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{faculty.assignedStudents}</span>
                          <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>students</span>
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <span className={`text-xs ${theme === 'dark' ? 'text-[#ad9db9]' : 'text-slate-500'}`}>{faculty.lastActive}</span>
                      </td>
                      <td className="px-6 py-3 text-right">
                        <div className="flex justify-end gap-2">
                          <Link to={`/assign_students/${faculty.id}`} className={`p-1.5 hover:bg-blue-500/10 rounded transition-colors text-slate-400 hover:text-blue-500`} title="Assign Students">
                            <span className="material-symbols-outlined text-[18px]">person_add</span>
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
              <span className={`text-sm ${theme === 'dark' ? 'text-[#ad9db9]' : 'text-slate-500'}`}>Showing 1-10 of 86 faculty advisors</span>
              <div className="flex items-center gap-1">
                <button className={`flex items-center justify-center size-8 rounded border transition-colors disabled:opacity-30 ${theme === 'dark' ? 'border-[#322839] text-slate-400 hover:text-[#9a28eb]' : 'border-slate-200 text-slate-400 hover:text-[#9a28eb]'}`} disabled>
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="flex items-center justify-center size-8 rounded bg-[#9a28eb] text-white text-sm font-bold">1</button>
                <button className={`flex items-center justify-center size-8 rounded border text-sm font-medium transition-colors ${theme === 'dark' ? 'border-[#322839] text-[#ad9db9] hover:bg-[#9a28eb]/10' : 'border-slate-200 text-slate-600 hover:bg-[#9a28eb]/10'}`}>2</button>
                <button className={`flex items-center justify-center size-8 rounded border text-sm font-medium transition-colors ${theme === 'dark' ? 'border-[#322839] text-[#ad9db9] hover:bg-[#9a28eb]/10' : 'border-slate-200 text-slate-600 hover:bg-[#9a28eb]/10'}`}>3</button>
                <span className="px-2 text-slate-400">...</span>
                <button className={`flex items-center justify-center size-8 rounded border text-sm font-medium transition-colors ${theme === 'dark' ? 'border-[#322839] text-[#ad9db9] hover:bg-[#9a28eb]/10' : 'border-slate-200 text-slate-600 hover:bg-[#9a28eb]/10'}`}>18</button>
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
                <span className="material-symbols-outlined">school</span>
              </div>
              <div>
                <p className={`text-[10px] uppercase font-bold tracking-widest ${theme === 'dark' ? 'text-[#ad9db9]' : 'text-slate-500'}`}>Total Faculty Advisors</p>
                <p className={`text-xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>86</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-4">
              <div className="size-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <div>
                <p className={`text-[10px] uppercase font-bold tracking-widest ${theme === 'dark' ? 'text-[#ad9db9]' : 'text-slate-500'}`}>Students Assigned</p>
                <p className={`text-xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>1,642</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center gap-4">
              <div className="size-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <p className={`text-[10px] uppercase font-bold tracking-widest ${theme === 'dark' ? 'text-[#ad9db9]' : 'text-slate-500'}`}>Avg. Students/Advisor</p>
                <p className={`text-xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>19</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FacultyAdvisorManagement;
