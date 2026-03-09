import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AssignStudents = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileMenuRef = useRef(null);
  const [unassignedSearchQuery, setUnassignedSearchQuery] = useState('');
  const [assignedSearchQuery, setAssignedSearchQuery] = useState('');
  const [selectedUnassigned, setSelectedUnassigned] = useState([]);
  const [selectedAssigned, setSelectedAssigned] = useState([]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
    <div className="h-screen overflow-hidden flex font-[Inter,sans-serif]" style={{backgroundColor: '#FFFBF2'}}>
      {/* Sidebar */}
      <aside className="w-[260px] flex flex-col shrink-0 h-screen sticky top-0 px-4 pt-7 pb-5" style={{backgroundColor: '#000000', color: '#FFFFFF'}}>
        <div className="px-2 mb-9 flex items-center gap-2.5">
          <span className="text-white text-[1.2rem] font-bold tracking-[0.3px]" style={{fontFamily: 'Poppins, sans-serif'}}>SAPT</span>
        </div>

        <nav className="flex-1 flex flex-col gap-1">
          <Link 
            to="/admin_dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-[10px] transition-all text-[#9ca3af] hover:text-[#e5e7eb] hover:bg-white/5 font-medium text-[0.92rem]"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span>Dashboard</span>
          </Link>
          <Link 
            to="/admin_student_management"
            className="flex items-center gap-3 px-4 py-3 rounded-[10px] transition-all text-[#9ca3af] hover:text-[#e5e7eb] hover:bg-white/5 font-medium text-[0.92rem]"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span>Students</span>
          </Link>
          <Link 
            to="/faculty_advisor_management"
            className="flex items-center gap-3 px-4 py-3 rounded-[10px] transition-all font-semibold text-[0.92rem]"
            style={{backgroundColor: '#f5a623', color: '#1a1a2e'}}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span>Faculty Members</span>
          </Link>
          <Link 
            to="/reports_analytics"
            className="flex items-center gap-3 px-4 py-3 rounded-[10px] transition-all text-[#9ca3af] hover:text-[#e5e7eb] hover:bg-white/5 font-medium text-[0.92rem]"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span>Reports</span>
          </Link>
        </nav>

        <div ref={profileMenuRef} className="mt-auto" style={{position: 'relative'}}>
          <div style={{height: '1px', background: 'rgba(255,255,255,0.1)', margin: '12px 8px 16px'}}></div>
          
          {/* Profile Popup Menu */}
          {showProfileMenu && (
            <div style={{
              position: 'absolute',
              bottom: '70px',
              left: '8px',
              right: '8px',
              backgroundColor: '#000000',
              borderRadius: '12px',
              padding: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
              zIndex: 50
            }}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowProfileMenu(false);
                  navigate('/profile_settings');
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 12px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#e5e7eb',
                  fontSize: '0.88rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  fontFamily: 'inherit'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <svg className="w-[18px] h-[18px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                View Profile
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowProfileMenu(false);
                  navigate('/login');
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 12px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#ef4444',
                  fontSize: '0.88rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  fontFamily: 'inherit'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <svg className="w-[18px] h-[18px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                Logout
              </button>
            </div>
          )}
          
          <div
            className="flex items-center gap-2.5 p-2 rounded-[10px] cursor-pointer hover:bg-white/[0.07] transition-colors"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center font-bold text-[0.95rem]" style={{background: 'linear-gradient(135deg, #f5a623, #f7b731)', color: '#1a1a2e'}}>
              A
            </div>
            <div className="flex flex-col">
              <span className="text-[0.9rem] font-semibold text-white">Admin User</span>
              <span className="text-[0.78rem] text-[#9ca3af]">(Super Admin)</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto" style={{backgroundColor: '#FFFBF2'}}>
        {/* Dashboard Body */}
        <div className="p-8 flex flex-col gap-8">
        <h2 className="text-3xl font-bold" style={{color: '#1a1a2e'}}>Assign Students</h2>
        
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
            <h2 className={`text-2xl font-bold mb-1`} style={{color: '#1a1a2e'}}>{facultyAdvisor.name}</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm" style={{color: '#6b7280'}}>
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
          <div className={`rounded-xl flex flex-col overflow-hidden shadow-xl border`} style={{backgroundColor: '#ffffff', borderColor: '#e5e1d8'}}>
            <div className="p-5 border-b" style={{borderColor: '#e5e1d8'}}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`font-bold text-lg`} style={{color: '#1a1a2e'}}>Unassigned Students</h3>
                <span className="text-xs px-2 py-1 rounded" style={{backgroundColor: '#fafaf8', color: '#6b7280'}}>{unassignedStudents.length} Total</span>
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 transition-colors" style={{color: '#9ca3af'}}>
                  search
                </span>
                <input 
                  className="w-full border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: '#fafaf8',
                    borderColor: '#e5e1d8',
                    color: '#1a1a2e'
                  }}
                  placeholder="Search by name or ID..." 
                  type="text"
                  value={unassignedSearchQuery}
                  onChange={(e) => setUnassignedSearchQuery(e.target.value)}
                  onFocus={(e) => e.target.style.borderColor = '#f5a623'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e1d8'}
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
                        ? 'border-primary/20'
                        : 'border-transparent hover:border-primary/20'
                    }`}
                    style={{
                      backgroundColor: selectedUnassigned.includes(student.id) ? '#fff4e6' : '#fafaf8'
                    }}
                    onClick={() => handleCheckUnassigned(student.id)}
                  >
                    <input 
                      className="w-5 h-5 rounded bg-transparent text-primary focus:ring-primary cursor-pointer"
                      style={{borderColor: '#d1d5db'}}
                      type="checkbox"
                      checked={selectedUnassigned.includes(student.id)}
                      onChange={() => {}}
                    />
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-primary font-bold overflow-hidden" style={{backgroundColor: '#e5e1d8'}}>
                      {student.avatar ? (
                        <img alt="Student" className="w-full h-full object-cover" src={student.avatar} />
                      ) : (
                        <span className="text-sm">{student.name.split(' ').map(n => n[0]).join('')}</span>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className={`font-medium text-sm truncate`} style={{color: '#1a1a2e'}}>{student.name}</p>
                      <p className="text-xs truncate" style={{color: '#6b7280'}}>ID: {student.rollNumber} • {student.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-3 border-t flex justify-between items-center" style={{backgroundColor: '#fafaf8', borderColor: '#e5e1d8'}}>
              <button 
                className="text-xs hover:brightness-110 transition-colors underline"
                style={{color: '#6b7280', textDecorationColor: '#f5a623'}}
                onClick={handleSelectAllUnassigned}
              >
                {selectedUnassigned.length === filteredUnassigned.length ? 'Deselect All' : 'Select All Unassigned'}
              </button>
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{color: '#6b7280'}}>
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
          <div className={`rounded-xl flex flex-col overflow-hidden shadow-xl border`} style={{backgroundColor: '#ffffff', borderColor: '#e5e1d8'}}>
            <div className="p-5 border-b" style={{borderColor: '#e5e1d8', backgroundColor: '#fafaf8'}}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`font-bold text-lg`} style={{color: '#1a1a2e'}}>Assigned to {facultyAdvisor.name.split(' ')[1]}</h3>
                <span className="text-xs px-2 py-1 rounded font-bold" style={{backgroundColor: '#fff4e6', color: '#f5a623'}}>{assignedStudents.length} Active</span>
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 transition-colors" style={{color: '#9ca3af'}}>
                  search
                </span>
                <input 
                  className="w-full border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: '#ffffff',
                    borderColor: '#e5e1d8',
                    color: '#1a1a2e'
                  }}
                  placeholder="Filter assigned students..." 
                  type="text"
                  value={assignedSearchQuery}
                  onChange={(e) => setAssignedSearchQuery(e.target.value)}
                  onFocus={(e) => e.target.style.borderColor = '#f5a623'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e1d8'}
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
                        ? 'border-primary/20'
                        : 'border-transparent hover:border-primary/20'
                    }`}
                    style={{
                      backgroundColor: selectedAssigned.includes(student.id) ? '#fff4e6' : '#fafaf8'
                    }}
                    onClick={() => handleCheckAssigned(student.id)}
                  >
                    <input 
                      className="w-5 h-5 rounded bg-transparent text-primary focus:ring-primary cursor-pointer"
                      style={{borderColor: '#d1d5db'}}
                      type="checkbox"
                      checked={selectedAssigned.includes(student.id)}
                      onChange={() => {}}
                    />
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-primary font-bold overflow-hidden" style={{backgroundColor: '#e5e1d8'}}>
                      {student.avatar ? (
                        <img alt="Student" className="w-full h-full object-cover" src={student.avatar} />
                      ) : (
                        <span className="text-sm">{student.name.split(' ').map(n => n[0]).join('')}</span>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className={`font-medium text-sm truncate`} style={{color: '#1a1a2e'}}>{student.name}</p>
                      <p className="text-xs truncate" style={{color: '#6b7280'}}>ID: {student.rollNumber} • {student.year}</p>
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
            <div className="p-3 border-t flex justify-end" style={{backgroundColor: '#fafaf8', borderColor: '#e5e1d8'}}>
              <span className="text-xs" style={{color: '#6b7280'}}>Last updated: Today, 10:24 AM</span>
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
