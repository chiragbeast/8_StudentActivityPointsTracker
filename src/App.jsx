import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import MFAPage from './pages/MFAPage'
import StudentDashboard from './pages/StudentDashboard'
import AdminDashboard from './pages/AdminDashboard'
import AdminUserManagement from './pages/AdminUserManagement'
import FacultyAdvisorManagement from './pages/FacultyAdvisorManagement'
import ReportsAnalytics from './pages/ReportsAnalytics'
import AddNewStudentUser from './pages/AddNewStudentUser'
import AddFacultyAdvisor from './pages/AddFacultyAdvisor'
import UserProfileSettings from './pages/UserProfileSettings'
import EditStudent from './pages/EditStudent'
import AssignStudents from './pages/AssignStudents'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mfa" element={<MFAPage />} />
        <Route path="/student_dashboard" element={<StudentDashboard theme="dark" />} />
        <Route path="/student_dashboard/dark" element={<StudentDashboard theme="dark" />} />
        <Route path="/student_dashboard/light" element={<StudentDashboard theme="light" />} />
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/admin_student_management" element={<AdminUserManagement />} />
        <Route path="/faculty_advisor_management" element={<FacultyAdvisorManagement />} />
        <Route path="/reports_analytics" element={<ReportsAnalytics />} />
        <Route path="/add_new_student" element={<AddNewStudentUser />} />
        <Route path="/add_faculty_advisor" element={<AddFacultyAdvisor />} />
        <Route path="/profile_settings" element={<UserProfileSettings />} />
        <Route path="/edit_student/:id" element={<EditStudent />} />
        <Route path="/assign_students/:id" element={<AssignStudents />} />
      </Routes>
    </Router>
  )
}

export default App
