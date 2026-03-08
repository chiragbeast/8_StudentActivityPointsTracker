import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserProfileSettings = () => {
  const navigate = useNavigate()
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const profileMenuRef = useRef(null)
  
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [notifications, setNotifications] = useState(true)

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target)) {
        setShowProfileMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSave = (e) => {
    e.preventDefault()
    console.log('Save changes', { currentPassword, newPassword, confirmPassword, notifications })
    alert('Profile settings saved successfully!')
  }

  const handleDiscard = () => {
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  return (
    <div style={{display: 'flex', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'}}>
      {/* Black Sidebar */}
      <aside style={{
        width: '260px',
        backgroundColor: '#000000',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'sticky',
        top: 0,
        flexShrink: 0
      }}>
        {/* Logo/Branding */}
        <div style={{padding: '28px 24px 20px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #f5a623, #d68910)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '1.2rem',
              color: '#1a1a2e'
            }}>S</div>
            <div>
              <h1 style={{fontSize: '1.1rem', fontWeight: '700', margin: 0, letterSpacing: '-0.3px'}}>SAPT Portal</h1>
              <p style={{fontSize: '0.7rem', color: '#888', margin: 0, marginTop: '2px'}}>Admin Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav style={{flex: 1, padding: '12px 20px'}}>
          <Link 
            to="/admin_dashboard"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '10px',
              color: '#aaa',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.2s',
              marginBottom: '6px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <span style={{fontSize: '1.3rem'}}>📊</span>
            <span>Dashboard</span>
          </Link>
          
          <Link 
            to="/admin-user-management"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '10px',
              color: '#aaa',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.2s',
              marginBottom: '6px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <span style={{fontSize: '1.3rem'}}>👥</span>
            <span>Students</span>
          </Link>
          
          <Link 
            to="/faculty-management"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '10px',
              color: '#aaa',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.2s',
              marginBottom: '6px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <span style={{fontSize: '1.3rem'}}>🎓</span>
            <span>Faculty Members</span>
          </Link>
          
          <Link 
            to="/reports"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '10px',
              color: '#aaa',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.2s',
              marginBottom: '6px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <span style={{fontSize: '1.3rem'}}>📈</span>
            <span>Reports</span>
          </Link>
        </nav>

        {/* Profile Popup Menu at Bottom */}
        <div style={{padding: '16px 20px', borderTop: '1px solid #1a1a1a'}}>
          <div 
            ref={profileMenuRef}
            style={{position: 'relative'}}
          >
            <div 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                backgroundColor: showProfileMenu ? '#1a1a1a' : 'transparent'
              }}
              onMouseEnter={(e) => {if (!showProfileMenu) e.currentTarget.style.backgroundColor = '#1a1a1a'}}
              onMouseLeave={(e) => {if (!showProfileMenu) e.currentTarget.style.backgroundColor = 'transparent'}}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #fdf8f0, #f5e6c8)',
                border: '2px solid #f5a623',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '1rem',
                color: '#1a1a2e',
                flexShrink: 0
              }}>A</div>
              <div style={{flex: 1, minWidth: 0}}>
                <p style={{fontSize: '0.85rem', fontWeight: '600', margin: 0, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Administrator</p>
                <p style={{fontSize: '0.7rem', color: '#888', margin: 0}}>Admin</p>
              </div>
              <span style={{fontSize: '1.2rem', color: '#888'}}>⋮</span>
            </div>
            
            {showProfileMenu && (
              <div style={{
                position: 'absolute',
                bottom: '100%',
                left: 0,
                right: 0,
                marginBottom: '8px',
                backgroundColor: '#1a1a1a',
                borderRadius: '10px',
                padding: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                zIndex: 1000
              }}>
                <Link 
                  to="/profile"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    color: '#ddd',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    transition: 'background-color 0.2s',
                    marginBottom: '4px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#252525'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <span style={{fontSize: '1.1rem'}}>👤</span>
                  <span>Profile Settings</span>
                </Link>
                <Link 
                  to="/login"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    color: '#f87171',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#252525'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <span style={{fontSize: '1.1rem'}}>🚪</span>
                  <span>Logout</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area with Cream Background */}
      <main style={{
        flex: 1,
        backgroundColor: '#FFFBF2',
        overflowY: 'auto',
        padding: '36px 40px'
      }}>
        <div style={{maxWidth: '1100px', margin: '0 auto'}}>
          {/* Header */}
          <div style={{textAlign: 'center', marginBottom: '32px'}}>
            <h1 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.85rem',
              fontWeight: '800',
              color: '#1a1a2e',
              margin: '0 0 6px'
            }}>Admin Profile & Settings</h1>
            <p style={{fontSize: '0.92rem', color: '#6b7280', margin: 0}}>
              Manage your administrative account and security preferences.
            </p>
          </div>

          {/* Grid Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '320px 1fr',
            gap: '24px',
            alignItems: 'start'
          }}>
            {/* Left: Profile Card */}
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '32px 28px 28px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              {/* Avatar */}
              <div style={{marginBottom: '18px'}}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #fdf8f0 0%, #f5e6c8 100%)',
                  border: '3px solid #f5a623',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '3rem',
                    fontWeight: '800',
                    color: '#1a1a2e'
                  }}>A</span>
                </div>
              </div>

              <h2 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.3rem',
                fontWeight: '700',
                color: '#1a1a2e',
                margin: '0 0 4px'
              }}>Administrator</h2>
              <p style={{fontSize: '0.85rem', color: '#6b7280', margin: '0 0 2px'}}>Role: System Admin</p>
              <p style={{fontSize: '0.82rem', color: '#9ca3af', margin: '0 0 20px'}}>admin@university.edu</p>

              <button style={{
                width: '100%',
                padding: '12px',
                border: 'none',
                borderRadius: '10px',
                background: '#f5a623',
                color: '#1a1a2e',
                fontSize: '0.9rem',
                fontWeight: '700',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'transform 0.15s, box-shadow 0.2s',
                boxShadow: '0 2px 8px rgba(245,166,35,0.3)',
                marginBottom: '24px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(245,166,35,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(245,166,35,0.3)';
              }}>
                Change Profile Picture
              </button>

              {/* Profile Completion */}
              <div style={{width: '100%'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                  <span style={{fontSize: '0.82rem', fontWeight: '600', color: '#4C9AFF'}}>Profile Completion</span>
                  <span style={{fontSize: '0.82rem', fontWeight: '700', color: '#1a1a2e'}}>85%</span>
                </div>
                <div style={{
                  height: '6px',
                  background: '#e5e1d8',
                  borderRadius: '999px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    width: '85%',
                    background: 'linear-gradient(90deg, #4C9AFF, #2d7ae0)',
                    borderRadius: '999px',
                    transition: 'width 0.4s ease'
                  }}></div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
              {/* Account Settings Card */}
              <div style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '28px 32px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
              }}>
                <h2 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#1a1a2e',
                  margin: '0 0 18px'
                }}>Account Settings</h2>

                <h3 style={{
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  color: '#1a1a2e',
                  margin: '0 0 4px'
                }}>Update Password</h3>
                <p style={{
                  fontSize: '0.84rem',
                  color: '#6b7280',
                  margin: '0 0 18px',
                  lineHeight: '1.5'
                }}>Ensure your account is using a long, random password to stay secure.</p>

                <form onSubmit={handleSave}>
                  {/* Current Password */}
                  <label style={{
                    display: 'block',
                    fontSize: '0.84rem',
                    fontWeight: '600',
                    color: '#1a1a2e',
                    marginBottom: '6px'
                  }}>Current Password</label>
                  <div style={{position: 'relative', marginBottom: '16px'}}>
                    <input
                      type={showCurrent ? 'text' : 'password'}
                      placeholder="••••••••••"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 44px 12px 16px',
                        border: '1.5px solid #e5e1d8',
                        borderRadius: '10px',
                        fontSize: '0.92rem',
                        color: '#1a1a2e',
                        background: '#fafaf8',
                        fontFamily: 'inherit',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#f5a623'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e5e1d8'}
                    />
                    <button 
                      type="button"
                      onClick={() => setShowCurrent(!showCurrent)}
                      style={{
                        position: 'absolute',
                        right: '14px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#9ca3af',
                        fontSize: '1.1rem',
                        display: 'flex',
                        alignItems: 'center',
                        padding: 0
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#6b7280'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                    >
                      {showCurrent ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>

                  {/* New Password and Confirm Password Row */}
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.84rem',
                        fontWeight: '600',
                        color: '#1a1a2e',
                        marginBottom: '6px'
                      }}>New Password</label>
                      <div style={{position: 'relative', marginBottom: '16px'}}>
                        <input
                          type={showNew ? 'text' : 'password'}
                          placeholder="••••••••••"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px 44px 12px 16px',
                            border: '1.5px solid #e5e1d8',
                            borderRadius: '10px',
                            fontSize: '0.92rem',
                            color: '#1a1a2e',
                            background: '#fafaf8',
                            fontFamily: 'inherit',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                            boxSizing: 'border-box'
                          }}
                          onFocus={(e) => e.currentTarget.style.borderColor = '#f5a623'}
                          onBlur={(e) => e.currentTarget.style.borderColor = '#e5e1d8'}
                        />
                        <button 
                          type="button"
                          onClick={() => setShowNew(!showNew)}
                          style={{
                            position: 'absolute',
                            right: '14px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#9ca3af',
                            fontSize: '1.1rem',
                            display: 'flex',
                            alignItems: 'center',
                            padding: 0
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#6b7280'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                        >
                          {showNew ? '👁️' : '👁️‍🗨️'}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.84rem',
                        fontWeight: '600',
                        color: '#1a1a2e',
                        marginBottom: '6px'
                      }}>Confirm Password</label>
                      <div style={{position: 'relative', marginBottom: '16px'}}>
                        <input
                          type={showConfirm ? 'text' : 'password'}
                          placeholder="••••••••••"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px 44px 12px 16px',
                            border: '1.5px solid #e5e1d8',
                            borderRadius: '10px',
                            fontSize: '0.92rem',
                            color: '#1a1a2e',
                            background: '#fafaf8',
                            fontFamily: 'inherit',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                            boxSizing: 'border-box'
                          }}
                          onFocus={(e) => e.currentTarget.style.borderColor = '#f5a623'}
                          onBlur={(e) => e.currentTarget.style.borderColor = '#e5e1d8'}
                        />
                        <button 
                          type="button"
                          onClick={() => setShowConfirm(!showConfirm)}
                          style={{
                            position: 'absolute',
                            right: '14px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#9ca3af',
                            fontSize: '1.1rem',
                            display: 'flex',
                            alignItems: 'center',
                            padding: 0
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#6b7280'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                        >
                          {showConfirm ? '👁️' : '👁️‍🗨️'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '8px'}}>
                    <button 
                      type="button"
                      onClick={handleDiscard}
                      style={{
                        padding: '10px 24px',
                        border: 'none',
                        background: 'transparent',
                        color: '#1a1a2e',
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        transition: 'color 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#6b7280'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#1a1a2e'}
                    >
                      Discard
                    </button>
                    <button 
                      type="submit"
                      style={{
                        padding: '10px 28px',
                        border: 'none',
                        borderRadius: '10px',
                        background: '#1a1a2e',
                        color: '#fff',
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        transition: 'transform 0.15s, box-shadow 0.2s',
                        boxShadow: '0 2px 8px rgba(26,26,46,0.2)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(26,26,46,0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(26,26,46,0.2)';
                      }}
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>

              {/* Notifications Card */}
              <div style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '28px 32px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
              }}>
                <h2 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#1a1a2e',
                  margin: '0 0 18px'
                }}>Notifications</h2>
                
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px'}}>
                  <div>
                    <h3 style={{fontSize: '0.95rem', fontWeight: '700', color: '#1a1a2e', margin: 0}}>
                      Notification Preferences
                    </h3>
                    <p style={{fontSize: '0.84rem', color: '#6b7280', margin: '4px 0 0', lineHeight: '1.5'}}>
                      Stay updated with important activity alerts and system announcements.
                    </p>
                  </div>
                  
                  <label style={{display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', flexShrink: 0}}>
                    <input
                      type="checkbox"
                      checked={notifications}
                      onChange={(e) => setNotifications(e.target.checked)}
                      style={{display: 'none'}}
                    />
                    <div style={{
                      width: '48px',
                      height: '26px',
                      background: notifications ? '#f5a623' : '#d1d5db',
                      borderRadius: '999px',
                      position: 'relative',
                      transition: 'background 0.25s',
                      flexShrink: 0
                    }}>
                      <div style={{
                        position: 'absolute',
                        width: '20px',
                        height: '20px',
                        background: '#fff',
                        borderRadius: '50%',
                        top: '3px',
                        left: notifications ? 'calc(100% - 23px)' : '3px',
                        transition: 'left 0.25s',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.15)'
                      }}></div>
                    </div>
                    <span style={{fontSize: '0.84rem', fontWeight: '500', color: '#1a1a2e', lineHeight: '1.3'}}>
                      Receive system notifications
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '28px 0 16px',
            marginTop: '32px',
            borderTop: '1px solid #e5e1d8',
            fontSize: '0.78rem',
            color: '#9ca3af'
          }}>
            <span>© 2024 Student Activity Tracker. All rights reserved.</span>
            <div style={{display: 'flex', gap: '20px'}}>
              <a href="#" style={{color: '#6b7280', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s'}}
                 onMouseEnter={(e) => e.currentTarget.style.color = '#1a1a2e'}
                 onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>
                Privacy Policy
              </a>
              <a href="#" style={{color: '#6b7280', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s'}}
                 onMouseEnter={(e) => e.currentTarget.style.color = '#1a1a2e'}
                 onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>
                Terms of Service
              </a>
              <a href="#" style={{color: '#6b7280', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s'}}
                 onMouseEnter={(e) => e.currentTarget.style.color = '#1a1a2e'}
                 onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>
                Help Center
              </a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default UserProfileSettings;
