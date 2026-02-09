import { useState } from 'react';
import { Link } from 'react-router-dom';

const UserProfileSettings = () => {
  const [mfaEnabled, setMfaEnabled] = useState(true);
  const [theme, setTheme] = useState('dark');

  return (
    <div 
      className={`min-h-screen flex font-display transition-colors duration-300 ${theme === 'dark' ? 'bg-[#1a1121]' : 'bg-white'}`}
      style={theme === 'dark' ? {
        backgroundImage: 'radial-gradient(at 0% 0%, rgba(154, 40, 235, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(14, 33, 160, 0.15) 0px, transparent 50%)',
        backgroundAttachment: 'fixed'
      } : {}}
    >
      {/* Sidebar */}
      <aside className={`w-64 flex flex-col shrink-0 h-screen sticky top-0 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0c0712] text-white' : 'bg-[#0c0712] text-white'}`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-white">shield_person</span>
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight">SAPT Portal</h1>
            <p className="text-xs text-gray-400">User Dashboard</p>
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1 mt-4">
          <Link 
            to="/student_dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <a 
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">school</span>
            <span className="text-sm font-medium">Academics</span>
          </a>
          <a 
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">work</span>
            <span className="text-sm font-medium">Placements</span>
          </a>
          <a 
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white"
            href="#"
          >
            <span className="material-symbols-outlined">person</span>
            <span className="text-sm font-medium">Profile</span>
          </a>
          <div className="pt-4 pb-2 px-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Support</span>
          </div>
          <a 
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">help</span>
            <span className="text-sm font-medium">Help Center</span>
          </a>
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
            <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Profile Settings</h2>
            <div className={`flex items-center gap-2 text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400 bg-white/5' : 'text-gray-400 bg-gray-50'}`}>
              <span>Student</span>
              <span>/</span>
              <span className="text-primary">Profile</span>
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
                  <p className={`text-sm font-semibold leading-none ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Alex Johnson</p>
                  <p className={`text-[10px] font-medium uppercase mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-400'}`}>Student</p>
                </div>
                <div 
                  className="w-10 h-10 rounded-xl bg-center bg-cover border-2 border-primary/40"
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBM3IefidXMebkkQNml8cwX5k4D2ylQlPCikryxwzAJ26LpY-n4uMuBBUNAO9kR9W1BS-mvC-E26mVni5eP3qIHC5t7NGeWgDvRzJezKP0WB1gtrE-abggs7YFxQQTkuzW-iodqkhwM17jw-_l9r5CZk-Yo19FhoVNahIMvExAavrqHsC09A7elhTEWS25uXZ0DZawdIMmW9-vZrr43L5PLxod8CTZF-uW3bnHOdtJbRg7bEvwD_SU9c40pTcHG_byomTdqg8yDavir')"}}
                ></div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
          {/* Profile Header */}
          <div 
            className={`rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-end border transition-all duration-300 ${theme === 'dark' ? 'bg-[rgba(30,20,40,0.6)] backdrop-blur-xl border-primary/20' : 'bg-white border-gray-200 shadow-lg'}`}
            style={theme === 'dark' ? {
              boxShadow: '0 0 15px rgba(154, 40, 235, 0.2)'
            } : {}}
          >
              <div 
                className="rounded-full flex items-center justify-center p-1"
                style={{
                  background: 'linear-gradient(135deg, #0e21a0, #9929ea)'
                }}
              >
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32 md:size-40 border-4 border-[#1a1121]" 
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVQu6Hkd_g4mkFDVsEiqj-I3KAs-qbVl8GepIRbp63Ij2eAAq2SgeYWgL3lqKclYo4yxqVbHX74eVmQ7wBnKHUTJqLj3oD7NXyYLb_zJK3UaP8E1xHluyUQEMNU-E8RxT2pCSZhZ3T6V5nbMmN2Q_Qi4KZ-LAXhcqunkn8TiNsAAbCqpyIWy7wtya3dpWBNrgpdry0zp9zFAxrFdKjz07D_-TSJ8r2tpSi_MhcIAKtgSKJ13bxXxW9WMBylRBzvMFzB8W7DrgGEppm')"}}
                ></div>
              </div>
              <div className="flex flex-col flex-1 text-center md:text-left">
                <h1 className="text-white text-3xl font-bold leading-tight">Alex Johnson</h1>
                <p className="text-primary font-medium text-lg">Senior Software Engineering Student</p>
                <p className="text-[#b292c8] mt-1 flex items-center justify-center md:justify-start gap-2">
                  <span className="material-symbols-outlined text-sm">id_card</span>
                  Roll No: 2021BCS001
                </p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-white text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Grid Layout for Info and Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content Columns (Left & Middle) */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                {/* Profile Information Section */}
                <div 
                  className={`rounded-xl p-6 border transition-all duration-300 ${theme === 'dark' ? 'bg-[rgba(30,20,40,0.6)] backdrop-blur-xl border-primary/20' : 'bg-white border-gray-200 shadow-lg'}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary">person</span>
                    <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Profile Information</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                    <div className={`flex flex-col gap-1.5 border-b pb-4 ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
                      <p className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-[#b292c8]' : 'text-gray-500'}`}>Full Name</p>
                      <p className={`text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Alex Johnson</p>
                    </div>
                    <div className={`flex flex-col gap-1.5 border-b pb-4 ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
                      <p className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-[#b292c8]' : 'text-gray-500'}`}>Roll Number</p>
                      <p className={`text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>2021BCS001</p>
                    </div>
                    <div className={`flex flex-col gap-1.5 border-b pb-4 ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
                      <p className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-[#b292c8]' : 'text-gray-500'}`}>Department</p>
                      <p className={`text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Computer Science and Engineering</p>
                    </div>
                    <div className={`flex flex-col gap-1.5 border-b pb-4 ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
                      <p className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-[#b292c8]' : 'text-gray-500'}`}>Contact Number</p>
                      <p className={`text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>+91 98765 43210</p>
                    </div>
                    <div className={`flex flex-col gap-1.5 border-b pb-4 ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
                      <p className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-[#b292c8]' : 'text-gray-500'}`}>Email Address</p>
                      <p className={`text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>alex.johnson@university.edu</p>
                    </div>
                    <div className={`flex flex-col gap-1.5 border-b pb-4 ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
                      <p className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-[#b292c8]' : 'text-gray-500'}`}>Batch Year</p>
                      <p className={`text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>2021 - 2025</p>
                    </div>
                  </div>
                </div>

                {/* Account Security Section */}
                <div 
                  className={`rounded-xl p-6 border transition-all duration-300 ${theme === 'dark' ? 'bg-[rgba(30,20,40,0.6)] backdrop-blur-xl border-primary/20' : 'bg-white border-gray-200 shadow-lg'}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary">shield_person</span>
                    <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Account Security</h2>
                  </div>
                  <div className="space-y-6">
                    <div className={`flex items-center justify-between p-4 rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
                      <div className="flex flex-col gap-1">
                        <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Multi-Factor Authentication (MFA)</p>
                        <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>Add an extra layer of security to your account.</p>
                      </div>
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={mfaEnabled}
                          onChange={(e) => setMfaEnabled(e.target.checked)}
                          className="sr-only peer" 
                        />
                        <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </div>
                    </div>
                    <div className={`flex items-center justify-between p-4 rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
                      <div className="flex flex-col gap-1">
                        <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Password Management</p>
                        <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>Last changed 3 months ago.</p>
                      </div>
                      <button className="px-4 py-2 border border-primary/50 text-primary rounded-lg text-sm font-bold hover:bg-primary/10 transition-colors">
                        Change Password
                      </button>
                    </div>
                    <div className={`flex items-center justify-between p-4 rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
                      <div className="flex flex-col gap-1">
                        <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Active Sessions</p>
                        <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>2 devices currently logged in.</p>
                      </div>
                      <button className={`transition-colors ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>
                        <span className="material-symbols-outlined">chevron_right</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Panel (Right) */}
              <div className="flex flex-col gap-8">
                {/* SAPT Points Card */}
                <div 
                  className={`rounded-xl p-8 relative overflow-hidden group border transition-all duration-300 ${theme === 'dark' ? 'bg-[rgba(30,20,40,0.6)] backdrop-blur-xl border-primary/20' : 'bg-white border-gray-200 shadow-lg'}`}
                >
                  {/* Background Accent Glow */}
                  <div className="absolute -top-10 -right-10 size-32 bg-primary/20 blur-3xl rounded-full"></div>
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 ring-4 ring-primary/5 group-hover:ring-primary/20 transition-all">
                      <span className="material-symbols-outlined text-primary text-3xl">token</span>
                    </div>
                    <h3 className={`text-sm font-semibold uppercase tracking-widest ${theme === 'dark' ? 'text-[#b292c8]' : 'text-gray-500'}`}>Points Earned</h3>
                    <p className={`text-5xl font-extrabold mt-2 tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>1,250</p>
                    <p className="text-primary text-sm font-medium mt-1">SAPT Credits</p>
                    <div className={`w-full h-1.5 rounded-full mt-6 overflow-hidden ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-200'}`}>
                      <div 
                        className="h-full bg-primary w-[75%] rounded-full"
                        style={{
                          boxShadow: '0 0 8px rgba(154,40,235,0.6)'
                        }}
                      ></div>
                    </div>
                    <p className={`text-xs mt-3 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>250 points to Platinum Status</p>
                  </div>
                </div>

                {/* Quick Actions / Transcript */}
                <div 
                  className={`rounded-xl p-6 border transition-all duration-300 ${theme === 'dark' ? 'bg-[rgba(30,20,40,0.6)] backdrop-blur-xl border-primary/20' : 'bg-white border-gray-200 shadow-lg'}`}
                >
                  <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Quick Documents</h3>
                  <div className="space-y-3">
                    <button 
                      className="w-full flex items-center gap-3 p-4 rounded-xl bg-primary text-white font-bold hover:opacity-90 transition-opacity"
                      style={{
                        boxShadow: '0 0 15px rgba(154, 40, 235, 0.2)'
                      }}
                    >
                      <span className="material-symbols-outlined">description</span>
                      <span className="flex-1 text-left">Download Transcript</span>
                      <span className="material-symbols-outlined text-[18px]">download</span>
                    </button>
                    <button className={`w-full flex items-center gap-3 p-4 rounded-xl font-medium transition-colors ${theme === 'dark' ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-gray-50 text-gray-900 hover:bg-gray-100'}`}>
                      <span className="material-symbols-outlined text-primary">verified</span>
                      <span className="flex-1 text-left">Degree Audit Report</span>
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </button>
                    <button className={`w-full flex items-center gap-3 p-4 rounded-xl font-medium transition-colors ${theme === 'dark' ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-gray-50 text-gray-900 hover:bg-gray-100'}`}>
                      <span className="material-symbols-outlined text-primary">badge</span>
                      <span className="flex-1 text-left">Digital ID Card</span>
                      <span className="material-symbols-outlined text-[18px]">download</span>
                    </button>
                  </div>
                </div>

                {/* Support Section */}
                <div className={`border border-dashed rounded-xl p-6 flex flex-col items-center gap-4 text-center ${theme === 'dark' ? 'border-white/20' : 'border-gray-300'}`}>
                  <span className={`material-symbols-outlined ${theme === 'dark' ? 'text-slate-400' : 'text-gray-400'}`}>help_outline</span>
                  <div>
                    <h4 className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Need help?</h4>
                    <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>Contact registrar for data corrections</p>
                  </div>
                  <a className="text-primary text-xs font-bold hover:underline" href="#">Open Support Ticket</a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className={`mt-8 pb-10 text-center text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`}>
              <p>© 2024 SAPT Portal. All Rights Reserved.</p>
              <div className="flex justify-center gap-4 mt-2">
                <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                <span className={theme === 'dark' ? 'text-slate-700' : 'text-gray-300'}>•</span>
                <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
              </div>
            </footer>
          </div>
        </main>
      </div>
  );
};

export default UserProfileSettings;
