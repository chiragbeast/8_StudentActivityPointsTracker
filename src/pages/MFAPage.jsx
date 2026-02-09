import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function MFAPage() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [timeLeft, setTimeLeft] = useState(114) // 1:54 in seconds
  const inputRefs = useRef([])

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [timeLeft])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleChange = (index, value) => {
    if (value.length > 1) {
      value = value[0]
    }

    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Auto-focus next input
      if (value !== '' && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '' && index > 0) {
        inputRefs.current[index - 1]?.focus()
      } else {
        const newOtp = [...otp]
        newOtp[index] = ''
        setOtp(newOtp)
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus()
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 6)
    if (/^[0-9]+$/.test(pastedData)) {
      const newOtp = pastedData.split('').concat(Array(6).fill('')).slice(0, 6)
      setOtp(newOtp)
      inputRefs.current[Math.min(pastedData.length, 5)]?.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const enteredOTP = otp.join('')
    
    // Hardcoded MFA pin
    if (enteredOTP === '123456') {
      // Redirect to admin dashboard after successful MFA
      navigate('/admin_dashboard')
    } else {
      alert('Invalid verification code. Please try again.')
      setOtp(['', '', '', '', '', ''])
      inputRefs.current[0]?.focus()
    }
  }

  const handleResend = () => {
    setTimeLeft(114)
    setOtp(['', '', '', '', '', ''])
    inputRefs.current[0]?.focus()
  }

  return (
    <div className="font-body text-white min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 mesh-bg-intense z-0"></div>
      
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 z-10">
        <div className="absolute top-8 left-8 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-black">
            <span className="material-symbols-outlined font-bold">shield_lock</span>
          </div>
          <h2 className="text-white text-xl font-extrabold tracking-tight font-display">
            SAPT <span className="text-primary opacity-80">SECURE</span>
          </h2>
        </div>

        <div className="layout-content-container flex flex-col w-full max-w-[520px]">
          <div className="glass-card-mfa rounded-[2rem] p-10 md:p-12 border border-primary/30">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
              </div>
              <h1 className="font-display text-white text-3xl font-bold leading-tight mb-3 tracking-tight">
                Secure Verification
              </h1>
              <p className="text-[#ad9db9] text-base max-w-[320px] mx-auto">
                Enter the 6-digit code sent to your faculty/admin email
              </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="flex justify-between gap-2 md:gap-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="otp-input w-12 h-16 md:w-14 md:h-20 bg-black/60 border border-[#493b54] rounded-[16px] text-center text-2xl font-bold text-white transition-all"
                    maxLength="1"
                    placeholder="·"
                    type="text"
                    inputMode="numeric"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                  />
                ))}
              </div>

              <button 
                className="glow-button w-full bg-primary text-black font-bold py-5 rounded-2xl text-lg tracking-wide transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(153,41,234,0.3)]" 
                type="submit"
              >
                <span>Verify &amp; Access</span>
                <span className="material-symbols-outlined font-bold">lock_open</span>
              </button>
            </form>

            <div className="mt-10 text-center space-y-4">
              <p className="text-[#ad9db9] text-sm">
                Didn't receive the code? 
                <button 
                  className={`ml-1 font-bold ${timeLeft > 0 ? 'text-[#ad9db9] cursor-not-allowed' : 'text-primary hover:underline cursor-pointer'}`}
                  onClick={handleResend}
                  disabled={timeLeft > 0}
                >
                  Resend Code
                </button>
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                <span className="material-symbols-outlined text-primary text-sm">timer</span>
                <span className="text-primary/90 text-xs font-mono font-bold uppercase tracking-widest">
                  {timeLeft > 0 ? `Resend available in ${formatTime(timeLeft)}` : 'Code ready to resend'}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center items-center gap-6">
            <a className="flex items-center gap-2 text-[#ad9db9] hover:text-primary text-sm font-medium transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">contact_support</span>
              IT Support
            </a>
            <span className="w-1 h-1 bg-[#493b54] rounded-full"></span>
            <Link to="/login" className="flex items-center gap-2 text-[#ad9db9] hover:text-primary text-sm font-medium transition-colors">
              <span className="material-symbols-outlined text-lg">logout</span>
              Back to Login
            </Link>
          </div>
        </div>

        <div className="fixed bottom-8 flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-black/60 backdrop-blur-md">
          <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#ad9db9]">Secured Session: 0x9929ea</span>
        </div>
      </div>
    </div>
  )
}
