'use client';

import Link from 'next/link';
import {
  Home,
  BookOpen,
  CalendarCheck,
  User,
  Menu as MenuIcon
} from 'lucide-react';

const StudentDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base-100">
        {/* Navbar */}
        <div className="navbar bg-secondary text-secondary-content px-4">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer" className="btn btn-ghost">
              <MenuIcon className="w-5 h-5" />
            </label>
          </div>
          <div className="flex-1 font-bold text-lg">Student Dashboard</div>
        </div>

        {/* Page content */}
        <div className="p-6">{children}</div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-1">
          <li>
            <Link href="/student/dashboard" className="flex items-center gap-2">
              <Home className="w-5 h-5" /> Dashboard
            </Link>
          </li>
          <li>
            <Link href="/student/classroom" className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" /> My Classes
            </Link>
          </li>
          <li>
            <Link href="/student/attendance" className="flex items-center gap-2">
              <CalendarCheck className="w-5 h-5" /> My Attendance
            </Link>
          </li>
          <li>
            <Link href="/student/profile" className="flex items-center gap-2">
              <User className="w-5 h-5" /> My Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboardLayout;
