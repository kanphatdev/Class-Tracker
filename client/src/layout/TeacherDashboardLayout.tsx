'use client';

import Link from 'next/link';
import {
  Home,
  BookOpen,
  PlusSquare,
  Edit2,
  CalendarCheck,
  FileText,
  Clock,
} from 'lucide-react';

const TeacherDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base-100">
        {/* Navbar */}
        <div className="navbar bg-primary text-primary-content px-4">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer" className="btn btn-ghost">
              ☰
            </label>
          </div>
          <div className="flex-1 font-bold text-lg">Teacher Dashboard</div>
        </div>

        {/* Page content */}
        <div className="p-6">{children}</div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-1">
          <li>
            <Link href="/teacher/dashboard">
              <Home className="w-4 h-4" /> Dashboard
            </Link>
          </li>
          <li>
            <Link href="/teacher/classroom">
              <BookOpen className="w-4 h-4" /> My Classes
            </Link>
          </li>
          <li>
            <Link href="/teacher/classroom/create">
              <PlusSquare className="w-4 h-4" /> Create Class
            </Link>
          </li>
          <li>
            <Link href="/teacher/profile">
              <Edit2 className="w-4 h-4" /> Edit Profile
            </Link>
          </li>
          <li className="menu-title">
            <span>Attendance</span>
          </li>
          <li>
            <Link href="/teacher/classroom/1/attendance/start">
              <Clock className="w-4 h-4" /> Start Attendance
            </Link>
          </li>
          <li>
            <Link href="/teacher/classroom/1/attendance/end">
              <Clock className="w-4 h-4" /> End Attendance
            </Link>
          </li>
          <li>
            <Link href="/teacher/classroom/1/attendance/report">
              <FileText className="w-4 h-4" /> Attendance Report
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeacherDashboardLayout;
