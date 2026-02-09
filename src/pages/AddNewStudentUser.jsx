import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddNewStudentUser = () => {
  const [sendActivationEmail, setSendActivationEmail] = useState(true);
  const navigate = useNavigate();

  const handleAddStudent = () => {
    // Handle form submission
    console.log('Adding new student user...');
    // Navigate back to student management
    navigate('/admin_student_management');
  };

  const handleCancel = () => {
    navigate('/admin_student_management');
  };

  return (
    <div className="min-h-screen flex font-display bg-[#0a060e] text-white overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 flex flex-col shrink-0 h-screen sticky top-0 bg-[#0c0712] text-white">
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
      <main className="flex-1 overflow-y-auto bg-[#0a060e] relative flex flex-col items-center justify-center p-8">
        {/* Abstract Background Decor */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="w-full max-w-2xl z-10">
          <header className="mb-8 text-center">
            <h2 className="text-4xl font-black text-white tracking-tight mb-2">Add New Student User</h2>
            <p className="text-slate-400 text-base">Register a new student to the SAPT administrative management system.</p>
          </header>
          
          {/* Form Card */}
          <div 
            className="rounded-xl p-8 shadow-2xl border border-primary/20"
            style={{
              backdropFilter: 'blur(12px)',
              background: 'rgba(26, 17, 33, 0.7)'
            }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Full Name</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl">person</span>
                    <input 
                      className="w-full bg-black/40 border border-primary/20 rounded-lg py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-500" 
                      placeholder="Johnathan Doe" 
                      type="text"
                    />
                  </div>
                </div>
                
                {/* Roll Number */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Roll Number</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl">badge</span>
                    <input 
                      className="w-full bg-black/40 border border-primary/20 rounded-lg py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-500" 
                      placeholder="2024CS101" 
                      type="text"
                    />
                  </div>
                </div>
                
                {/* Department Dropdown */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Department</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl z-10 pointer-events-none">account_tree</span>
                    <select className="w-full appearance-none bg-black/40 border border-primary/20 rounded-lg py-3.5 pl-12 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all cursor-pointer hover:border-primary/30">
                      <option value="" disabled selected className="bg-[#1a1121] text-slate-400">Select Department</option>
                      <option value="cse" className="bg-[#1a1121] text-white py-2">Computer Science & Engineering (CSE)</option>
                      <option value="ece" className="bg-[#1a1121] text-white py-2">Electronics & Communication Engineering (ECE)</option>
                      <option value="eee" className="bg-[#1a1121] text-white py-2">Electrical & Electronics Engineering (EEE)</option>
                      <option value="ch" className="bg-[#1a1121] text-white py-2">Chemical Engineering (CH)</option>
                      <option value="me" className="bg-[#1a1121] text-white py-2">Mechanical Engineering (ME)</option>
                      <option value="ce" className="bg-[#1a1121] text-white py-2">Civil Engineering (CE)</option>
                      <option value="bt" className="bg-[#1a1121] text-white py-2">Biotechnology (BT)</option>
                      <option value="mse" className="bg-[#1a1121] text-white py-2">Materials Science & Engineering (MSE)</option>
                      <option value="pe" className="bg-[#1a1121] text-white py-2">Production Engineering (PE)</option>
                      <option value="ep" className="bg-[#1a1121] text-white py-2">Engineering Physics (EP)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">expand_more</span>
                  </div>
                </div>
                
                {/* Mobile Number */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Mobile Number</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl">call</span>
                    <input 
                      className="w-full bg-black/40 border border-primary/20 rounded-lg py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-500" 
                      placeholder="+91 98765 43210" 
                      type="tel"
                    />
                  </div>
                </div>
                
                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Email Address</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl">mail</span>
                    <input 
                      className="w-full bg-black/40 border border-primary/20 rounded-lg py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-500" 
                      placeholder="student@nitc.ac.in" 
                      type="email"
                    />
                  </div>
                </div>
              </div>
              
              {/* Activation Toggle */}
              <div className="pt-4 flex items-center justify-between bg-primary/5 p-4 rounded-xl border border-primary/10">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">Send Activation Email</span>
                  <span className="text-xs text-slate-400">Student will receive an email to set their password immediately.</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={sendActivationEmail}
                    onChange={(e) => setSendActivationEmail(e.target.checked)}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              
              {/* Actions */}
              <div className="flex items-center gap-4 pt-4">
                <button 
                  type="button"
                  onClick={handleAddStudent}
                  className="flex-1 text-white font-bold py-4 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #9a28eb 0%, #6d1bb1 100%)',
                    boxShadow: '0 4px 15px rgba(154, 40, 235, 0.4)'
                  }}
                >
                  <span className="material-symbols-outlined">person_add</span>
                  Add Student User
                </button>
                <button 
                  type="button"
                  onClick={handleCancel}
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 text-slate-300 font-bold rounded-lg transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          
          <footer className="mt-8 text-center text-slate-500 text-xs">
            © 2024 SAPT Administration System • Secure Portal
          </footer>
        </div>
      </main>
    </div>
  );
};

export default AddNewStudentUser;
