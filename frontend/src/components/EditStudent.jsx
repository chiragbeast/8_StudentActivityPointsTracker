import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isActive, setIsActive] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedAdvisor, setSelectedAdvisor] = useState('Prof. Michael Chen (Information Systems)');

  const facultyAdvisors = [
    { id: 1, name: 'Dr. Sarah Jenkins', department: 'Computer Science' },
    { id: 2, name: 'Prof. Michael Chen', department: 'Information Systems' },
    { id: 3, name: 'Dr. Elena Rodriguez', department: 'Data Analytics' },
    { id: 4, name: 'Dr. James Wilson', department: 'Cybersecurity' },
    { id: 5, name: 'Prof. Aisha Patel', department: 'Machine Learning' },
    { id: 6, name: 'Dr. Rajesh Kumar', department: 'Software Engineering' },
    { id: 7, name: 'Prof. Lisa Wong', department: 'Database Systems' },
  ];

  const filteredAdvisors = facultyAdvisors.filter(advisor =>
    advisor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    advisor.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Saving student data...');
    navigate('/admin_student_management');
  };

  const handleCancel = () => {
    navigate('/admin_student_management');
  };

  const handleDelete = () => {
    console.log('Deleting student account...');
    navigate('/admin_student_management');
  };

  return (
    <div className="min-h-screen flex font-display p-6 relative overflow-hidden" style={{backgroundColor: '#FFFBF2'}}>
      
      <main className="w-full max-w-2xl mx-auto">
        {/* Main Edit Card */}
        <div 
          className="rounded-xl p-8 shadow-2xl border"
          style={{
            backgroundColor: '#ffffff',
            borderColor: '#e5e1d8'
          }}
        >
          {/* Header */}
          <header className="mb-8 border-b pb-6 flex items-center justify-between" style={{borderColor: '#e5e1d8'}}>
            <div>
              <h1 className="font-poppins text-3xl font-bold tracking-tight" style={{color: '#1a1a2e'}}>
                Edit <span className="text-primary">Student</span>
              </h1>
              <p className="text-sm mt-1" style={{color: '#6b7280'}}>Manage student identity and academic permissions</p>
            </div>
            <div className="h-12 w-12 rounded-full flex items-center justify-center border" style={{backgroundColor: '#fff4e6', borderColor: '#f5a623'}}>
              <span className="material-symbols-outlined text-primary">person_outline</span>
            </div>
          </header>

          <form className="space-y-8" onSubmit={handleSave}>
            {/* Basic Information Section */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary text-xl">badge</span>
                <h2 className="font-poppins font-semibold text-lg" style={{color: '#1a1a2e'}}>Basic Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider ml-1" style={{color: '#1a1a2e'}}>Full Name</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-lg" style={{color: '#9ca3af'}}>person</span>
                    <input 
                      className="w-full border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-1 transition-all font-display" 
                      style={{
                        backgroundColor: '#fafaf8',
                        borderColor: '#e5e1d8',
                        color: '#1a1a2e'
                      }}
                      type="text" 
                      defaultValue="Arjun Malhotra"
                      onFocus={(e) => e.target.style.borderColor = '#f5a623'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e1d8'}
                    />
                  </div>
                </div>

                {/* Roll Number */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider ml-1" style={{color: '#1a1a2e'}}>Roll Number</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-lg" style={{color: '#9ca3af'}}>fingerprint</span>
                    <input 
                      className="w-full border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-1 transition-all font-display" 
                      style={{
                        backgroundColor: '#fafaf8',
                        borderColor: '#e5e1d8',
                        color: '#1a1a2e'
                      }}
                      type="text" 
                      defaultValue="SAPT-2024-042"
                      onFocus={(e) => e.target.style.borderColor = '#f5a623'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e1d8'}
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider ml-1" style={{color: '#1a1a2e'}}>Mobile Number</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-lg" style={{color: '#9ca3af'}}>phone_iphone</span>
                    <input 
                      className="w-full border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-1 transition-all font-display" 
                      style={{
                        backgroundColor: '#fafaf8',
                        borderColor: '#e5e1d8',
                        color: '#1a1a2e'
                      }}
                      type="tel" 
                      defaultValue="+91 98765 43210"
                      onFocus={(e) => e.target.style.borderColor = '#f5a623'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e1d8'}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Academic Assignment Section */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary text-xl">school</span>
                <h2 className="font-poppins font-semibold text-lg" style={{color: '#1a1a2e'}}>Academic Assignment</h2>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider ml-1" style={{color: '#1a1a2e'}}>Assigned Faculty Advisor</label>
                <div className="relative">
                  {/* Search Input */}
                  <span className="material-symbols-outlined absolute left-3 top-3 text-lg z-10" style={{color: '#9ca3af'}}>search</span>
                  <input
                    type="text"
                    className="w-full border rounded-lg py-3 pl-10 pr-10 focus:outline-none focus:ring-1 transition-all font-display cursor-pointer"
                    style={{
                      backgroundColor: '#fafaf8',
                      borderColor: '#e5e1d8',
                      color: '#1a1a2e'
                    }}
                    placeholder="Search faculty advisors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={(e) => { setShowDropdown(true); e.target.style.borderColor = '#f5a623'; }}
                    onBlur={(e) => { setTimeout(() => setShowDropdown(false), 200); e.target.style.borderColor = '#e5e1d8'; }}
                  />
                  <span 
                    className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{color: '#9ca3af'}}
                  >
                    expand_more
                  </span>

                  {/* Dropdown */}
                  {showDropdown && (
                    <div className="absolute z-20 w-full mt-2 border rounded-lg shadow-xl max-h-60 overflow-y-auto" style={{backgroundColor: '#ffffff', borderColor: '#e5e1d8'}}>
                      {filteredAdvisors.length > 0 ? (
                        filteredAdvisors.map((advisor) => (
                          <div
                            key={advisor.id}
                            className="px-4 py-3 cursor-pointer transition-colors border-b last:border-b-0"
                            style={{borderColor: '#e5e1d8'}}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fff4e6'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            onClick={() => {
                              setSelectedAdvisor(`${advisor.name} (${advisor.department})`);
                              setSearchQuery('');
                              setShowDropdown(false);
                            }}
                          >
                            <p className="text-sm font-medium" style={{color: '#1a1a2e'}}>{advisor.name}</p>
                            <p className="text-xs" style={{color: '#6b7280'}}>{advisor.department}</p>
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-sm" style={{color: '#6b7280'}}>No faculty advisors found</div>
                      )}
                    </div>
                  )}
                </div>
                {!showDropdown && selectedAdvisor && (
                  <p className="text-sm border rounded px-3 py-2 mt-2" style={{color: '#1a1a2e', backgroundColor: '#fff4e6', borderColor: '#f5a623'}}>
                    Selected: {selectedAdvisor}
                  </p>
                )}
                <p className="text-[10px] mt-1 flex items-center gap-1" style={{color: '#6b7280'}}>
                  <span className="material-symbols-outlined text-xs">info</span>
                  Faculty advisors oversee academic progress and credit approvals.
                </p>
              </div>
            </section>

            {/* Account Status Section */}
            <section className="rounded-lg p-5 border" style={{backgroundColor: '#fafaf8', borderColor: '#e5e1d8'}}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#fff4e6'}}>
                    <span className="material-symbols-outlined text-primary">security</span>
                  </div>
                  <div>
                    <h3 className="font-poppins font-medium" style={{color: '#1a1a2e'}}>Account Status</h3>
                    <p className="text-xs" style={{color: '#6b7280'}}>
                      Current state: <span className={`font-semibold uppercase ${isActive ? 'text-emerald-500' : 'text-red-500'}`}>
                        {isActive ? 'Active' : 'Inactive'}
                      </span>
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 rounded-full peer-focus:outline-none peer-checked:bg-[#f5a623] bg-[#d1d5db] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  <span className="ml-3 text-sm font-medium" style={{color: '#1a1a2e'}}>Activate Account</span>
                </label>
              </div>
            </section>

            {/* Action Footer */}
            <footer className="flex items-center justify-between gap-4 pt-4 border-t" style={{borderColor: '#e5e1d8'}}>
              <button 
                className="px-6 py-2.5 rounded-lg border font-medium hover:brightness-95 transition-all text-sm text-white flex items-center gap-2" 
                style={{borderColor: '#ef4444', backgroundColor: '#ef4444'}}
                type="button"
                onClick={() => setShowDeleteConfirm(true)}
              >
                <span className="material-symbols-outlined text-lg">delete</span>
                Delete Account
              </button>
              <div className="flex items-center gap-4">
                <button 
                  className="px-6 py-2.5 rounded-lg border font-medium hover:brightness-95 transition-all text-sm" 
                  style={{borderColor: '#e5e1d8', color: '#1a1a2e', backgroundColor: '#fafaf8'}}
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button 
                  className="px-8 py-2.5 rounded-lg text-white font-semibold hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm flex items-center gap-2" 
                  style={{
                    background: 'linear-gradient(135deg, #f5a623 0%, #f7b731 100%)',
                    boxShadow: '0 4px 15px rgba(245, 166, 35, 0.4)'
                  }}
                  type="submit"
                >
                  <span className="material-symbols-outlined text-lg">save</span>
                  Save Changes
                </button>
              </div>
            </footer>
          </form>
        </div>

        {/* System Meta Info */}
        <div className="mt-6 flex justify-center gap-8 text-[11px] uppercase tracking-[2px] font-bold" style={{color: '#9ca3af'}}>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
            System Operational
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[12px]">lock</span>
            Secure SAPT Access
          </div>
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-red-600 text-2xl">warning</span>
              </div>
              <div>
                <h3 className="text-lg font-bold" style={{color: '#1a1a2e'}}>Delete Student Account</h3>
                <p className="text-sm" style={{color: '#6b7280'}}>This action cannot be undone</p>
              </div>
            </div>
            <p className="text-sm mb-6" style={{color: '#6b7280'}}>
              Are you sure you want to permanently delete this student account? All associated data including activity points and records will be removed from the system.
            </p>
            <div className="flex items-center gap-3 justify-end">
              <button 
                className="px-4 py-2 rounded-lg border font-medium hover:brightness-95 transition-all text-sm" 
                style={{borderColor: '#e5e1d8', color: '#1a1a2e', backgroundColor: '#fafaf8'}}
                onClick={() => setShowDeleteConfirm(false)}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 rounded-lg font-medium hover:brightness-90 transition-all text-sm text-white" 
                style={{backgroundColor: '#ef4444'}}
                onClick={handleDelete}
              >
                Delete Permanently
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditStudent;
