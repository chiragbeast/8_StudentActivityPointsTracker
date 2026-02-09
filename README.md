# SAPT - Student Activity Points Tracker

A responsive React web application for tracking student activity points with a modern, glassmorphic UI design.

## Features

- **Landing Page**: Beautiful hero section with animated elements, role-based access cards, and feature highlights
- **Login Page**: Secure login with role selection (Student/Faculty/Admin) and modern form design
- **MFA Verification**: Two-factor authentication page with OTP input and countdown timer
- **Student Dashboard**: Dark/light theme dashboard with stats, charts, and submission tracking
- **Admin Dashboard**: Comprehensive admin panel with user management, system monitoring, and analytics
- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Glassmorphism effects, smooth animations, and gradient accents

## Tech Stack

- **React 18** - Frontend framework
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first styling
- **Material Symbols** - Icon library
- **Google Fonts** - Poppins, Lexend, and Manrope fonts

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
SAPT/
├── src/
│   ├── pages/
│   │   ├── LandingPage.jsx              # Main landing page
│   │   ├── LoginPage.jsx                # Login page with role selection
│   │   ├── MFAPage.jsx                  # MFA verification page
│   │   ├── StudentDashboard.jsx         # Student dashboard (dark/light)
│   │   ├── AdminDashboard.jsx           # Admin dashboard (dark/light theme)
│   │   ├── AdminUserManagement.jsx      # Admin user management page (dark/light)
│   │   └── FacultyAdvisorManagement.jsx # Faculty advisor management page (dark/light)
│   ├── App.jsx                          # Main app component with routing
│   ├── main.jsx                         # Entry point
│   └── index.css                        # Global styles and Tailwind config
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind configuration
└── postcss.config.js              # PostCSS configuration
```

## Routes

- `/` - Landing page
- `/login` - Login page
- `/mfa` - Multi-factor authentication page
- `/student_dashboard` - Student dashboard (dark theme)
- `/student_dashboard/dark` - Student dashboard (dark theme)
- `/student_dashboard/light` - Student dashboard (light theme)
- `/admin_dashboard` - Admin dashboard (light/dark theme)
- `/admin_user_management` - Admin user management page (light/dark theme)
- `/faculty_advisor_management` - Faculty advisor management page (light/dark theme)

## Login Credentials

### Student Access
- Email: `student@nitc.ac.in`
- Password: `123`
- Redirects to: Student Dashboard

### Faculty/Admin Access
- Email: `faculty@nitc.ac.in` or `admin@nitc.ac.in`
- Password: `123`
- MFA Code: `123456`
- Redirects to: Admin Dashboard (after MFA verification)

## Customization

### Colors

The primary color scheme can be customized in `tailwind.config.js`:

```js
colors: {
  "primary": "#9a28eb",
  "accent-blue": "#0e21a0",
  "background-light": "#f7f6f8",
  "background-dark": "#000000",
}
```

### Fonts

The project uses three Google Fonts:
- **Poppins** - Headings (bold, black weights)
- **Lexend** - Display text
- **Manrope** - Body text

## Key Features Implementation

### Admin Dashboard
- **Theme Toggle**: Switch between dark and light themes with the theme toggle button in the header (replaces search bar)
- **System Monitoring**: Real-time stats for Total Users (12,482), System Uptime (99.98%), Active Sessions (1,204), Error Rate (0.04%)
- **Performance Charts**: Interactive bar charts showing traffic and CPU load over 24h/7d/30d periods
- **User Management**: Full user table with role management, status tracking, and action controls
- **Control Panel**: Auto-scaling toggle, resource threshold slider, database backup scheduling
- **System Logs**: Real-time event tracking with success/warning indicators
- **Server Distribution**: Global cluster visualization with active node monitoring
- **Dark Sidebar**: Professional black sidebar (#0c0712) with navigation links including Users link to user management page

### Admin User Management
- **Dedicated User Management Page**: Separate page accessible from admin sidebar "Users" link
- **Theme Support**: Full dark/light theme support with consistent admin layout
- **User Table**: High-density table showing Name & Identity, Role, Department, Status, Last Active
- **Search & Filters**: Advanced search by name/email/role with dropdown filters for Role, Department, and Status
- **User Actions**: Assign Advisor, Edit User, Deactivate/Activate, Delete actions for each user
- **Status Indicators**: Visual indicators for Active (green glow), Pending (amber), Deactivated (gray)
- **Pagination**: Navigate through 1,248 total users with page controls
- **Statistics Cards**: Total Active Users (1,248), Logged in Today (412), Pending Approvals (28)
- **Consistent Navigation**: Maintains admin header with breadcrumbs and theme toggle

### Faculty Advisor Management
- **Dedicated Faculty Management Page**: Separate page accessible from admin sidebar "Faculty Advisors" link
- **Theme Support**: Full dark/light theme support with consistent admin layout
- **Faculty Table**: Comprehensive table showing Faculty Details, Department, Specialization, Assigned Students, Status, Last Active
- **Search & Filters**: Advanced search by name/department/specialization with dropdown filters
- **Faculty Actions**: View Students, Edit Faculty, Assign Students actions for each advisor
- **Specialization Tags**: Color-coded specialization badges (AI, Power Systems, Robotics, etc.)
- **Student Assignment Tracking**: Display of assigned student count per advisor
- **Status Indicators**: Visual indicators for Active (green glow) and On Leave (amber)
- **Pagination**: Navigate through 86 faculty advisors with page controls
- **Statistics Cards**: Total Faculty Advisors (86), Students Assigned (1,642), Avg. Students/Advisor (19)
- **Consistent Navigation**: Maintains admin header with breadcrumbs and theme toggle

### Student Dashboard
- **Theme Toggle**: Switch between dark and light themes with smooth animations
- **Activity Tracking**: Total points (1,625), monthly progress, graduation progress ring (75%)
- **Points Distribution**: Donut chart showing Institute (60%) vs Department (40%) points
- **Recent Submissions**: Table with activity status badges (Pending/Approved)
- **Category Badges**: Color-coded tags (Tech/Social/Cultural)

### Glassmorphism Effects
Custom CSS classes provide the signature glass-card effect:
- `.glass-card` - Landing page cards
- `.glass-card-login` - Login page card
- `.glass-card-mfa` - MFA verification card

### Interactive Elements
- Role selector with animated transitions
- Password visibility toggle
- Auto-advancing OTP inputs
- Countdown timer for code resend
- Hover effects on buttons and cards
- **Theme toggle switch** - Switch between dark and light themes in the dashboard

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Flexible grid layouts
- Touch-friendly interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is part of academic work for SEM 6 SAPT course.
