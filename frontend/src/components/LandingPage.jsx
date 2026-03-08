import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen selection:bg-primary/30">
      <div className="relative overflow-hidden">
        {/* Background Glow Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-accent-blue/20 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 nav-blur border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <span className="material-symbols-outlined text-white leading-none">account_tree</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white font-heading">SAPT</span>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Features</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Guidelines</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Statistics</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Support</a>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login">
                <button className="px-6 py-2.5 bg-primary hover:bg-primary/80 text-white rounded-xl font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/25">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Live 2024 Academic Session
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black font-heading tracking-tight mb-8 leading-[1.1]">
              <span className="hero-gradient-text">Empowering Your</span><br />
              <span className="text-white">Academic Journey</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-light mb-12">
              The university's premium activity points tracker. Seamlessly log achievements, validate certifications, and skyrocket your professional profile with glassmorphism precision.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-2">
                Get Started <span className="material-symbols-outlined">rocket_launch</span>
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                View Demo <span className="material-symbols-outlined">play_circle</span>
              </button>
            </div>

            {/* Live Counter Stats */}
            <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 border border-white/10 flex flex-wrap justify-around items-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold font-heading text-white mb-1">1,240,500+</div>
                <div className="text-slate-500 text-sm uppercase tracking-widest">Total Points Tracked</div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block"></div>
              <div className="text-center">
                <div className="text-4xl font-bold font-heading text-primary mb-1">45,000+</div>
                <div className="text-slate-500 text-sm uppercase tracking-widest">Active Students</div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block"></div>
              <div className="text-center">
                <div className="text-4xl font-bold font-heading text-white mb-1">98.2%</div>
                <div className="text-slate-500 text-sm uppercase tracking-widest">Validation Rate</div>
              </div>
            </div>
          </div>
        </main>

        {/* Role-Based Section */}
        <section className="py-24 px-6 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-black font-heading text-white mb-4">Role-Based Access</h2>
              <p className="text-slate-400 max-w-xl">Tailored experiences for every member of the academic community with precision-engineered workflows.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Student Card */}
              <div className="glass-card rounded-[16px] p-8 glow-hover group cursor-pointer">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">school</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Student</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Upload your activity certificates, monitor your progress toward graduation requirements, and download official transcripts instantly.
                </p>
                <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
                  Access Portal <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </div>
              </div>

              {/* Faculty Card */}
              <div className="glass-card rounded-[16px] p-8 glow-hover group cursor-pointer">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">verified_user</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Faculty</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Quickly review student submissions, validate participation in departmental events, and manage class-wide point distributions.
                </p>
                <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
                  Validation Desk <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </div>
              </div>

              {/* Admin Card */}
              <div className="glass-card rounded-[16px] p-8 glow-hover group cursor-pointer">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">admin_panel_settings</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Administrator</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Oversee system-wide analytics, configure point allocation rules for new categories, and manage global user permissions.
                </p>
                <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
                  System Control <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlight Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/30 blur-2xl rounded-full opacity-20"></div>
              <div className="relative glass-card rounded-2xl overflow-hidden border border-white/10 aspect-video">
                <img 
                  alt="Dashboard Analytics" 
                  className="w-full h-full object-cover mix-blend-lighten opacity-80" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtCK40qsO4VDORofQHoPOjbbskQMRW5oog7xDPE2JHUTZ6AEqqx1Tl-TUiSu1xHzTtXZspqxdz84DNIaM1005v3Y2wsH2ivdwmAmsvkcBKyPmDQALuqZEOVCqfa1MVTN4nYnYHkXzkcBUEy1tLeopWNVjPQjcRwZJzx5G1oWbdv4_4vbR2s9_hyojadgTI38JwGl_a4P_lN_t4ti2f3_r6IABZ9d-Gj0D671cOk1SgaXol_ArNvqNE4i_8i85knr9SUSZ2fn5OHBym"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-black font-heading text-white mb-6">Unrivaled System Performance</h2>
              <p className="text-slate-400 text-lg mb-8">SAPT isn't just a tracker; it's a comprehensive ecosystem designed to eliminate bureaucratic hurdles in academic growth.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm">bolt</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Instant Verification</h4>
                    <p className="text-slate-500 text-sm">Automated OCR technology reads your certificates and validates them in seconds.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm">security</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Immutable Records</h4>
                    <p className="text-slate-500 text-sm">Secure data storage ensures your activity points are safe throughout your academic tenure.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm">monitoring</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Progress Forecasting</h4>
                    <p className="text-slate-500 text-sm">Predictive analytics show you exactly what you need to achieve for your desired honors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer Section */}
        <footer className="py-20 px-6 border-t border-white/10 glass-card">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-1.5 bg-primary rounded-lg">
                    <span className="material-symbols-outlined text-white text-xl">account_tree</span>
                  </div>
                  <span className="text-xl font-black font-heading text-white">SAPT</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The official Student Activity Points Tracker for elite universities worldwide. Elevating academic standards through technology.
                </p>
              </div>
              
              <div>
                <h5 className="text-white font-bold mb-6">Platform</h5>
                <ul className="space-y-4 text-slate-500 text-sm">
                  <li><a className="hover:text-primary transition-colors" href="#">How it Works</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Point Categories</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">API Reference</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Integrations</a></li>
                </ul>
              </div>
              
              <div>
                <h5 className="text-white font-bold mb-6">Resources</h5>
                <ul className="space-y-4 text-slate-500 text-sm">
                  <li><a className="hover:text-primary transition-colors" href="#">Documentation</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Academic Guidelines</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Status</a></li>
                </ul>
              </div>
              
              <div>
                <h5 className="text-white font-bold mb-6">Join Newsletter</h5>
                <p className="text-slate-500 text-sm mb-4">Stay updated with system upgrades and point allocation updates.</p>
                <div className="flex gap-2">
                  <input 
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary w-full text-white" 
                    placeholder="Email address" 
                    type="email"
                  />
                  <button className="bg-primary px-4 py-2 rounded-lg text-white font-bold text-sm whitespace-nowrap">Join</button>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-600 text-xs">
              <p>© 2024 SAPT Technologies. All rights reserved.</p>
              <div className="flex gap-8">
                <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                <a className="hover:text-white transition-colors" href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
