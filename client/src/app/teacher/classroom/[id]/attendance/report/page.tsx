// app/teacher/classroom/[id]/attendance/report/page.tsx
'use client';

import { useParams } from 'next/navigation';

export default function AttendanceReportPage() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Attendance Report</h1>
      <p className="text-gray-600">Classroom ID: {id}</p>
      {/* TODO: แสดงรายงานการเช็กชื่อของนักเรียนในห้องเรียนนี้ */}
    </div>
  );
}
