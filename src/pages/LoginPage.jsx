import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState('Student')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberDevice, setRememberDevice] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Hardcoded credentials
    const credentials = {
      Student: { email: 'student@nitc.ac.in', password: '123' },
      Faculty: { email: 'faculty@nitc.ac.in', password: '123' },
      Admin: { email: 'admin@nitc.ac.in', password: '123' }
    }
    
    const validCredentials = credentials[selectedRole]
    
    // Validate credentials
    if (formData.email === validCredentials.email && formData.password === validCredentials.password) {
      // Navigate to MFA page for Faculty/Admin with correct credentials
      if (selectedRole === 'Faculty' || selectedRole === 'Admin') {
        navigate('/mfa')
      } else {
        // For student, navigate to dashboard
        navigate('/student_dashboard')
      }
    } else {
      alert('Invalid email or password. Please try again.')
    }
  }

  return (
    <div className="font-body text-white min-h-screen overflow-x-hidden">
      {/* Background Layer */}
      <div className="fixed inset-0 mesh-bg z-0"></div>
      
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 z-10">
        {/* Top Branding (Minimalist) */}
        <div className="absolute top-8 left-8 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-black">
            <span className="material-symbols-outlined font-bold">shield_lock</span>
          </div>
          <h2 className="text-white text-xl font-extrabold tracking-tight">
            SAPT <span className="text-primary opacity-80">SECURE</span>
          </h2>
        </div>

        {/* Login Card Container */}
        <div className="layout-content-container flex flex-col w-full max-w-[480px]">
          <div className="glass-card-login rounded-xl p-8 md:p-10 border border-primary/20">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-white text-3xl font-bold leading-tight mb-2 tracking-tight">Welcome Back</h1>
              <p className="text-[#ad9db9] text-sm">Access your secure terminal portal</p>
            </div>

            {/* Role Selector */}
            <div className="flex mb-8">
              <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-black/40 border border-primary/20 p-1">
                {['Student', 'Faculty', 'Admin'].map((role) => (
                  <label 
                    key={role}
                    className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-xs font-bold uppercase tracking-wider transition-all ${
                      selectedRole === role ? 'bg-primary text-black' : 'text-[#ad9db9]'
                    }`}
                  >
                    <span className="truncate">{role}</span>
                    <input 
                      className="hidden" 
                      name="user-role" 
                      type="radio" 
                      value={role}
                      checked={selectedRole === role}
                      onChange={(e) => setSelectedRole(e.target.value)}
                    />
                  </label>
                ))}
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[#ad9db9] text-xs font-semibold uppercase tracking-widest pl-1">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#ad9db9] group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">alternate_email</span>
                  </div>
                  <input 
                    className="w-full bg-black/40 border border-[#493b54] rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-[#493b54] focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-all text-sm font-medium" 
                    placeholder="name@sapt-portal.edu" 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center pl-1">
                  <label className="text-[#ad9db9] text-xs font-semibold uppercase tracking-widest">
                    Password
                  </label>
                  <a className="text-primary/80 hover:text-primary text-xs font-medium transition-colors" href="#">
                    Forgot?
                  </a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#ad9db9] group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">lock</span>
                  </div>
                  <input 
                    className="w-full bg-black/40 border border-[#493b54] rounded-xl py-4 pl-12 pr-12 text-white placeholder:text-[#493b54] focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-all text-sm font-medium" 
                    placeholder="••••••••" 
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                  <div 
                    className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-[#ad9db9] hover:text-white transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Remember Me Toggle */}
              <div className="flex items-center gap-3 py-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    className="sr-only peer" 
                    type="checkbox" 
                    checked={rememberDevice}
                    onChange={(e) => setRememberDevice(e.target.checked)}
                  />
                  <div className="w-9 h-5 bg-[#322839] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </label>
                <span className="text-sm text-[#ad9db9] font-medium">Remember this device</span>
              </div>

              {/* Sign In Button */}
              <button 
                className="glow-button w-full bg-primary text-black font-bold py-4 rounded-xl text-base tracking-wide transition-all transform active:scale-[0.98] mt-4 flex items-center justify-center gap-2" 
                type="submit"
              >
                <span>Sign In</span>
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </form>

            {/* Footer Text */}
            <div className="mt-8 pt-8 border-t border-primary/10 text-center">
              <p className="text-[#ad9db9] text-sm">
                Don't have an account? 
                <a className="text-white font-bold hover:underline ml-1" href="#">Contact IT Support</a>
              </p>
            </div>
          </div>

          {/* Help Center Floating */}
          <div className="mt-8 flex justify-center items-center gap-6">
            <a className="flex items-center gap-2 text-[#ad9db9] hover:text-primary text-sm font-medium transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">help</span>
              Help Center
            </a>
            <span className="w-1 h-1 bg-[#493b54] rounded-full"></span>
            <a className="flex items-center gap-2 text-[#ad9db9] hover:text-primary text-sm font-medium transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">policy</span>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
