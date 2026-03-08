import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './DashboardLayout.css';

export default function DashboardLayout() {
    return (
        <div className="layout">
            <Sidebar />
            <main className="layout-main">
                <Outlet />
            </main>
        </div>
    );
}
