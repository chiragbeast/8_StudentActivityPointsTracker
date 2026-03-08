import { useState, useEffect } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import NotificationPanel from './NotificationPanel';
import StatusBadge from './StatusBadge';
import CircularProgressCard from './CircularProgressCard';
import api from '../api';
import './StudentDashboard.css';



export default function StudentDashboard() {
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    const MOCK_DATA = {
        points: {
            totalPoints: 42,
            institutePoints: 28,
            departmentPoints: 14,
            graduationRequirement: { instituteRequired: 60, departmentRequired: 20 },
            semesterWise: [
                { semester: 1, institute: 5, department: 2 },
                { semester: 2, institute: 8, department: 4 },
                { semester: 3, institute: 10, department: 5 },
                { semester: 4, institute: 5, department: 3 },
            ],
        },
        recentSubmissions: [
            { _id: '1', activityName: 'Hackathon 2025', activityLevel: 'Institute', pointsApproved: 10, pointsRequested: 10, status: 'Approved', createdAt: '2025-11-01' },
            { _id: '2', activityName: 'Tech Talk', activityLevel: 'Department', pointsApproved: 0, pointsRequested: 5, status: 'Pending', createdAt: '2026-01-15' },
        ],
        activeDeadlines: [
            { _id: '1', title: 'Activity Submission – Sem 6', date: '2026-04-15', category: 'Institute' },
            { _id: '2', title: 'Department Event Registration', date: '2026-03-20', category: 'Department' },
        ],
    };

    useEffect(() => {
        const fetchDashboardData = async () => {
            // Use mock data for demo login
            if (user.email === 'student@nitc.ac.in') {
                setDashboardData(MOCK_DATA);
                setLoading(false);
                return;
            }
            try {
                const response = await api.get('/student/dashboard');
                setDashboardData(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching dashboard data:", err);
                setError('Failed to load dashboard data');
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading dashboard...</div>;
    if (error) return <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>{error}</div>;

    const { points, recentSubmissions, activeDeadlines } = dashboardData;

    // Formatting Graduation Data
    const reqInstitute = points?.graduationRequirement?.instituteRequired || 60;
    const reqDept = points?.graduationRequirement?.departmentRequired || 20;
    const currentInstitute = points?.institutePoints || 0;
    const currentDept = points?.departmentPoints || 0;

    // Progress bar math
    const totalRequired = reqInstitute + reqDept;
    const instituteProgressPct = totalRequired ? (currentInstitute / totalRequired) * 100 : 0;
    const departmentProgressPct = totalRequired ? (currentDept / totalRequired) * 100 : 0;

    return (
        <div className="dashboard">
            {/* Header */}
            <header className="dashboard-header">
                <div>
                    <h1 className="dashboard-title">Welcome back, {user.name?.split(' ')[0] || 'Student'}</h1>
                    <p className="dashboard-subtitle">Track your progress and continue your learning journey.</p>
                </div>
                <NotificationPanel />
            </header>

            {/* Top cards */}
            <div className="dashboard-grid">
                {/* Activity Points */}
                <div className="card card-points">
                    <h3 className="card-heading">Total Activity Points</h3>
                    <h2 className="points-value">{points?.totalPoints || 0}</h2>
                    <div className="progress-section">
                        <span className="progress-label">YOUR PROGRESS OVERALL</span>
                        <div className="progress-bar-track">
                            <div className="progress-bar-fill institute-fill" style={{ width: `${Math.min(instituteProgressPct, 100)}%` }} />
                            <div className="progress-bar-fill department-fill" style={{ width: `${Math.min(departmentProgressPct, 100)}%` }} />
                        </div>
                        <div className="progress-legend">
                            <span className="legend-institute">INSTITUTE</span>
                            <span className="legend-department">DEPARTMENT</span>
                        </div>
                    </div>
                </div>

                {/* Graduation Progress */}
                <div className="card card-graduation">
                    <h3 className="card-heading">Graduation Progress</h3>
                    <CircularProgressCard
                        instituteValue={currentInstitute}
                        instituteTotal={reqInstitute}
                        departmentValue={currentDept}
                        departmentTotal={reqDept}
                    />
                </div>

                {/* Recent Activity */}
                <div className="card card-recent">
                    <div className="card-header-row">
                        <h3 className="card-heading">Recent Activity</h3>
                        <button className="view-all-btn">VIEW ALL</button>
                    </div>
                    <div className="recent-table-header">
                        <span>ACTIVITY</span>
                        <span>CATEGORY</span>
                        <span>POINTS</span>
                        <span>STATUS</span>
                    </div>
                    {recentSubmissions?.length === 0 ? (
                        <div style={{ padding: '1rem', textAlign: 'center', color: '#6b7280' }}>No recent submissions.</div>
                    ) : (
                        recentSubmissions?.map((s) => (
                            <div className="recent-row" key={s._id}>
                                <div className="recent-activity-info">
                                    <span className="recent-name">{s.activityName}</span>
                                    <span className="recent-date">{new Date(s.createdAt).toLocaleDateString()}</span>
                                </div>
                                <span className={`category-badge ${s.activityLevel.toLowerCase()}`}>
                                    {s.activityLevel}
                                </span>
                                <span className="recent-points">{s.status === 'Approved' ? s.pointsApproved : s.pointsRequested}</span>
                                <StatusBadge status={s.status} />
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Semester-wise Report */}
            <div className="card card-semester">
                <h3 className="card-heading">Semester-wise Report</h3>
                <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={points?.semesterWise || []} barGap={2} barCategoryGap="20%">
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                        <XAxis dataKey="semester" tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} tickFormatter={(val) => `Sem ${val}`} />
                        <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Legend
                            iconType="circle"
                            iconSize={8}
                            wrapperStyle={{ paddingTop: 12, fontSize: 13 }}
                            formatter={(value) => <span style={{ color: '#6b7280', textTransform: 'uppercase' }}>{value}</span>}
                        />
                        <Bar dataKey="institute" name="Institute" fill="#4C9AFF" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="department" name="Department" fill="#E8A0BF" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Upcoming Deadlines */}
            <div className="card card-deadlines">
                <h3 className="card-heading">Upcoming Deadlines</h3>
                <div className="deadlines-list">
                    {activeDeadlines?.length === 0 ? (
                        <div style={{ padding: '1rem', textAlign: 'center', color: '#6b7280' }}>No upcoming deadlines.</div>
                    ) : (
                        activeDeadlines?.map((d) => {
                            const daysLeft = Math.ceil((new Date(d.date) - new Date()) / (1000 * 60 * 60 * 24));
                            return (
                                <div className="deadline-row" key={d._id}>
                                    <div className="deadline-info">
                                        <span className="deadline-title">{d.title}</span>
                                        <span className="deadline-date">{new Date(d.date).toLocaleDateString()}</span>
                                    </div>
                                    <span className={`category-badge ${d.category.toLowerCase()}`}>{d.category}</span>
                                    <span className={`deadline-countdown ${daysLeft <= 14 ? 'urgent' : ''}`}>
                                        {daysLeft} days left
                                    </span>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}
