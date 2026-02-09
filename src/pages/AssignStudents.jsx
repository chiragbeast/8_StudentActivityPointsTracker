import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AssignStudents = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [theme, setTheme] = useState('dark');
  const [unassignedSearchQuery, setUnassignedSearchQuery] = useState('');
  const [assignedSearchQuery, setAssignedSearchQuery] = useState('');
  const [selectedUnassigned, setSelectedUnassigned] = useState([]);
  const [selectedAssigned, setSelectedAssigned] = useState([]);

  // Mock faculty data - would be fetched based on id
  const facultyAdvisor = {
    id: 1,
    name: 'Dr. Elena Rodriguez',
    department: 'Department of Computer Science',
    position: 'Senior Academic Advisor',
    email: 'e.rodriguez@university.edu',
    currentStudents: 24,
    avatar: 'https://i.pravatar.cc/150?img=20'
  };

  // Mock unassigned students
  const unassignedStudents = [
    { id: 1, name: 'Marcus Chen', rollNumber: '2024-8891', year: 'Senior', avatar: 'https://i.pravatar.cc/150?img=33' },
    { id: 2, name: 'Sarah Jenkins', rollNumber: '2024-1102', year: 'Junior', avatar: null },
    { id: 3, name: 'Julian Thorne', rollNumber: '2024-5542', year: 'Freshman', avatar: 'https://i.pravatar.cc/150?img=12' },
    { id: 4, name: 'Maya Patel', rollNumber: '2024-2219', year: 'Sophomore', avatar: 'https://i.pravatar.cc/150?img=25' },
    { id: 5, name: 'Alex Rivera', rollNumber: '2024-3345', year: 'Junior', avatar: 'https://i.pravatar.cc/150?img=15' },
    { id: 6, name: 'Emma Wilson', rollNumber: '2024-6678', year: 'Senior', avatar: 'https://i.pravatar.cc/150?img=10' },
  ];

  // Mock assigned students
  const assignedStudents = [
    { id: 101, name: 'Leo Vance', rollNumber: '2023-4412', year: 'Senior', verified: true, avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 102, name: 'Chloe Winters', rollNumber: '2023-9003', year: 'Senior', verified: false, avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 103, name: 'David Brooks', rollNumber: '2023-1128', year: 'Junior', verified: false, avatar: null },
    { id: 104, name: 'Imani Reed', rollNumber: '2023-7741', year: 'Senior', verified: false, avatar: 'https://i.pravatar.cc/150?img=30' },
  ];

  const filteredUnassigned = unassignedStudents.filter(student =>
    student.name.toLowerCase().includes(unassignedSearchQuery.toLowerCase()) ||
    student.rollNumber.includes(unassignedSearchQuery)
  );

  const filteredAssigned = assignedStudents.filter(student =>
    student.name.toLowerCase().includes(assignedSearchQuery.toLowerCase()) ||
    student.rollNumber.includes(assignedSearchQuery)
  );

  const handleCheckUnassigned = (studentId) => {
    setSelectedUnassigned(prev =>
      prev.includes(studentId)
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleCheckAssigned = (studentId) => {
    setSelectedAssigned(prev =>
      prev.includes(studentId)
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleSelectAllUnassigned = () => {
    if (selectedUnassigned.length === filteredUnassigned.length) {
      setSelectedUnassigned([]);
    } else {
      setSelectedUnassigned(filteredUnassigned.map(s => s.id));
    }
  };

  const handleAssignStudents = () => {
    console.log('Assigning students:', selectedUnassigned);
    // Handle assignment logic
  };

  const handleUnassignStudents = () => {
    console.log('Unassigning students:', selectedAssigned);
    // Handle unassignment logic
  };

  const handleDiscardChanges = () => {
    navigate('/faculty_advisor_management');
  };

  const handleFinalizeAssignments = () => {
    console.log('Finalizing assignments');
    navigate('/faculty_advisor_management');
  };

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
          <Link 
            to="/faculty_advisor_management"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white"
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
            <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Assign Students</h2>
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
        <div className="p-8 flex flex-col gap-8">
        {/* Advisor Profile Header */}
        <section className="bg-primary/5 rounded-xl border border-primary/20 p-6 flex flex-col md:flex-row items-center gap-6 shadow-[0_0_20px_-5px_rgba(154,40,235,0.4)]">
          <div className="relative">
            <img 
              alt="Advisor" 
              className="w-24 h-24 rounded-xl object-cover border-2 border-primary" 
              src={facultyAdvisor.avatar}
            />
            <div className="absolute -bottom-2 -right-2 bg-primary text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase shadow-lg">
              Faculty
            </div>
          </div>
          <div className="flex-grow text-center md:text-left">
            <h2 className={`text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{facultyAdvisor.name}</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-400 text-sm">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-sm">business</span> 
                {facultyAdvisor.department}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-sm">school</span> 
                {facultyAdvisor.position}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-sm">email</span> 
                {facultyAdvisor.email}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1 px-8 py-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-3xl font-bold text-primary">{facultyAdvisor.currentStudents}</span>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Current Students</span>
          </div>
        </section>

        {/* Assignment Split Pane */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 flex-grow min-h-[500px]">
          {/* Left Pane: Unassigned Students */}
          <div className={`rounded-xl flex flex-col overflow-hidden shadow-xl backdrop-blur-md border ${theme === 'dark' ? 'bg-white/5 bg-[rgba(26,17,33,0.7)] border-primary/20' : 'bg-white border-slate-200'}`}>
            <div className="p-5 border-b border-primary/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Unassigned Students</h3>
                <span className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded">{unassignedStudents.length} Total</span>
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">
                  search
                </span>
                <input 
                  className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-primary focus:border-primary transition-all outline-none"
                  placeholder="Search by name or ID..." 
                  type="text"
                  value={unassignedSearchQuery}
                  onChange={(e) => setUnassignedSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-grow overflow-y-auto p-2 custom-scrollbar">
              <div className="space-y-1">
                {filteredUnassigned.map((student) => (
                  <div 
                    key={student.id}
                    className={`flex items-center gap-4 p-3 rounded-lg transition-colors group cursor-pointer border ${
                      selectedUnassigned.includes(student.id)
                        ? 'bg-primary/10 border-primary/20'
                        : 'hover:bg-primary/10 border-transparent hover:border-primary/20'
                    }`}
                    onClick={() => handleCheckUnassigned(student.id)}
                  >
                    <input 
                      className="w-5 h-5 rounded border-slate-700 bg-transparent text-primary focus:ring-primary cursor-pointer"
                      type="checkbox"
                      checked={selectedUnassigned.includes(student.id)}
                      onChange={() => {}}
                    />
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary font-bold overflow-hidden">
                      {student.avatar ? (
                        <img alt="Student" className="w-full h-full object-cover" src={student.avatar} />
                      ) : (
                        <span className="text-sm">{student.name.split(' ').map(n => n[0]).join('')}</span>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className={`font-medium text-sm truncate ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{student.name}</p>
                      <p className="text-xs text-slate-500 truncate">ID: {student.rollNumber} • {student.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-3 bg-white/5 border-t border-primary/10 flex justify-between items-center">
              <button 
                className="text-xs text-slate-400 hover:text-white transition-colors underline decoration-primary/50"
                onClick={handleSelectAllUnassigned}
              >
                {selectedUnassigned.length === filteredUnassigned.length ? 'Deselect All' : 'Select All Unassigned'}
              </button>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                {selectedUnassigned.length} selected
              </span>
            </div>
          </div>

          {/* Central Column: Action Buttons */}
          <div className="flex lg:flex-col justify-center gap-4 items-center">
            <button 
              className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_-2px_rgba(154,40,235,0.6)] hover:scale-110 active:scale-95 transition-all group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              onClick={handleAssignStudents}
              disabled={selectedUnassigned.length === 0}
              title="Assign selected students"
            >
              <span className="material-symbols-outlined text-white group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <button 
              className="w-14 h-14 rounded-full bg-slate-800 border border-primary/30 flex items-center justify-center shadow-lg hover:border-primary active:scale-95 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleUnassignStudents}
              disabled={selectedAssigned.length === 0}
              title="Unassign selected students"
            >
              <span className="material-symbols-outlined text-primary group-hover:-translate-x-1 transition-transform">
                arrow_back
              </span>
            </button>
          </div>

          {/* Right Pane: Currently Assigned Students */}
          <div className={`rounded-xl flex flex-col overflow-hidden shadow-xl backdrop-blur-md border ${theme === 'dark' ? 'bg-white/5 bg-[rgba(26,17,33,0.7)] border-primary/20' : 'bg-white border-slate-200'}`}>
            <div className="p-5 border-b border-primary/10 bg-primary/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Assigned to {facultyAdvisor.name.split(' ')[1]}</h3>
                <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded font-bold">{assignedStudents.length} Active</span>
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">
                  search
                </span>
                <input 
                  className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-primary focus:border-primary transition-all outline-none"
                  placeholder="Filter assigned students..." 
                  type="text"
                  value={assignedSearchQuery}
                  onChange={(e) => setAssignedSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-grow overflow-y-auto p-2 custom-scrollbar">
              <div className="space-y-1">
                {filteredAssigned.map((student) => (
                  <div 
                    key={student.id}
                    className={`flex items-center gap-4 p-3 rounded-lg transition-colors group cursor-pointer border ${
                      selectedAssigned.includes(student.id)
                        ? 'bg-white/5 border-primary/20'
                        : 'bg-white/5 border-white/5 hover:border-primary/20'
                    }`}
                    onClick={() => handleCheckAssigned(student.id)}
                  >
                    <input 
                      className="w-5 h-5 rounded border-slate-700 bg-transparent text-primary focus:ring-primary cursor-pointer"
                      type="checkbox"
                      checked={selectedAssigned.includes(student.id)}
                      onChange={() => {}}
                    />
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary font-bold overflow-hidden">
                      {student.avatar ? (
                        <img alt="Student" className="w-full h-full object-cover" src={student.avatar} />
                      ) : (
                        <span className="text-sm">{student.name.split(' ').map(n => n[0]).join('')}</span>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className={`font-medium text-sm truncate ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{student.name}</p>
                      <p className="text-xs text-slate-500 truncate">ID: {student.rollNumber} • {student.year}</p>
                    </div>
                    {student.verified && (
                      <div className="text-emerald-500">
                        <span className="material-symbols-outlined text-sm">verified</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-3 bg-white/5 border-t border-primary/10 flex justify-end">
              <span className="text-xs text-slate-500">Last updated: Today, 10:24 AM</span>
            </div>
          </div>
        </div>

        {/* Sticky Footer Action Bar */}
        <footer className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3 overflow-hidden">
              {selectedUnassigned.slice(0, 2).map((id) => {
                const student = unassignedStudents.find(s => s.id === id);
                return student?.avatar ? (
                  <img 
                    key={id}
                    alt="" 
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover" 
                    src={student.avatar}
                  />
                ) : (
                  <div key={id} className="inline-block h-8 w-8 rounded-full ring-2 ring-black bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                    {student?.name.split(' ').map(n => n[0]).join('')}
                  </div>
                );
              })}
              {selectedUnassigned.length > 2 && (
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-black bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">
                  +{selectedUnassigned.length - 2}
                </div>
              )}
            </div>
            <div className="text-sm">
              <span className="text-primary font-bold">{selectedUnassigned.length} students</span> selected to be added to this advisor.
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button 
              className="flex-1 sm:flex-none px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              onClick={handleDiscardChanges}
            >
              Discard Changes
            </button>
            <button 
              className="flex-1 sm:flex-none px-8 py-2.5 bg-primary text-white rounded-lg font-bold shadow-[0_0_30px_-2px_rgba(154,40,235,0.6)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              onClick={handleFinalizeAssignments}
            >
              <span className="material-symbols-outlined text-sm">check_circle</span>
              Finalize Assignments
            </button>
          </div>
        </footer>
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #9a28eb44;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9a28eb;
        }
      `}</style>
    </div>
  );
};

export default AssignStudents;
