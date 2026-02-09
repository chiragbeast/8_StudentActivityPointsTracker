import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isActive, setIsActive] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
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

  return (
    <div className="min-h-screen flex font-display bg-[#0a060e] text-white p-6 relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      
      <main className="w-full max-w-2xl mx-auto">
        {/* Main Edit Card */}
        <div 
          className="rounded-xl p-8 shadow-2xl border border-white/5"
          style={{
            background: 'rgba(26, 26, 26, 0.6)',
            backdropFilter: 'blur(12px)'
          }}
        >
          {/* Header */}
          <header className="mb-8 border-b border-white/10 pb-6 flex items-center justify-between">
            <div>
              <h1 className="font-poppins text-3xl font-bold tracking-tight text-white">
                Edit <span className="text-primary">Student</span>
              </h1>
              <p className="text-slate-400 text-sm mt-1">Manage student identity and academic permissions</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <span className="material-symbols-outlined text-primary">person_outline</span>
            </div>
          </header>

          <form className="space-y-8" onSubmit={handleSave}>
            {/* Basic Information Section */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary text-xl">badge</span>
                <h2 className="font-poppins font-semibold text-lg text-white">Basic Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 ml-1">Full Name</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">person</span>
                    <input 
                      className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-display" 
                      type="text" 
                      defaultValue="Arjun Malhotra"
                    />
                  </div>
                </div>

                {/* Roll Number */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 ml-1">Roll Number</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">fingerprint</span>
                    <input 
                      className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-display" 
                      type="text" 
                      defaultValue="SAPT-2024-042"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 ml-1">Mobile Number</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">phone_iphone</span>
                    <input 
                      className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-display" 
                      type="tel" 
                      defaultValue="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Academic Assignment Section */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary text-xl">school</span>
                <h2 className="font-poppins font-semibold text-lg text-white">Academic Assignment</h2>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 ml-1">Assigned Faculty Advisor</label>
                <div className="relative">
                  {/* Search Input */}
                  <span className="material-symbols-outlined absolute left-3 top-3 text-slate-500 text-lg z-10">search</span>
                  <input
                    type="text"
                    className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-10 pr-10 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-display cursor-pointer"
                    placeholder="Search faculty advisors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowDropdown(true)}
                    onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                  />
                  <span 
                    className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                  >
                    expand_more
                  </span>

                  {/* Dropdown */}
                  {showDropdown && (
                    <div className="absolute z-20 w-full mt-2 bg-[#1a1121] border border-white/10 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                      {filteredAdvisors.length > 0 ? (
                        filteredAdvisors.map((advisor) => (
                          <div
                            key={advisor.id}
                            className="px-4 py-3 hover:bg-primary/10 cursor-pointer transition-colors border-b border-white/5 last:border-b-0"
                            onClick={() => {
                              setSelectedAdvisor(`${advisor.name} (${advisor.department})`);
                              setSearchQuery('');
                              setShowDropdown(false);
                            }}
                          >
                            <p className="text-white text-sm font-medium">{advisor.name}</p>
                            <p className="text-slate-400 text-xs">{advisor.department}</p>
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-slate-400 text-sm">No faculty advisors found</div>
                      )}
                    </div>
                  )}
                </div>
                {!showDropdown && selectedAdvisor && (
                  <p className="text-sm text-white bg-primary/10 border border-primary/20 rounded px-3 py-2 mt-2">
                    Selected: {selectedAdvisor}
                  </p>
                )}
                <p className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">info</span>
                  Faculty advisors oversee academic progress and credit approvals.
                </p>
              </div>
            </section>

            {/* Account Status Section */}
            <section className="bg-primary/5 rounded-lg p-5 border border-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">security</span>
                  </div>
                  <div>
                    <h3 className="font-poppins font-medium text-white">Account Status</h3>
                    <p className="text-xs text-slate-400">
                      Current state: <span className={`font-semibold uppercase ${isActive ? 'text-emerald-400' : 'text-red-400'}`}>
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
                  <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-white/10 shadow-md"></div>
                  <span className="ml-3 text-sm font-medium text-slate-300">Activate Account</span>
                </label>
              </div>
            </section>

            {/* Action Footer */}
            <footer className="flex items-center justify-end gap-4 pt-4 border-t border-white/10">
              <button 
                className="px-6 py-2.5 rounded-lg border border-slate-700 text-slate-300 font-medium hover:bg-slate-800 hover:text-white transition-all text-sm" 
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button 
                className="px-8 py-2.5 rounded-lg bg-primary text-white font-semibold hover:shadow-[0_0_25px_rgba(154,42,234,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all text-sm flex items-center gap-2" 
                type="submit"
              >
                <span className="material-symbols-outlined text-lg">save</span>
                Save Changes
              </button>
            </footer>
          </form>
        </div>

        {/* System Meta Info */}
        <div className="mt-6 flex justify-center gap-8 text-[11px] uppercase tracking-[2px] text-slate-600 font-bold">
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
    </div>
  );
};

export default EditStudent;
