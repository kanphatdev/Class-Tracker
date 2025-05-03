// app/teacher/classroom/[id]/attendance/start/page.tsx
'use client';

import { useParams } from 'next/navigation';

export default function StartAttendancePage() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Start Attendance</h1>
      <p className="text-gray-600">Classroom ID: {id}</p>
      {/* TODO: เพิ่มปุ่มเริ่มการเช็กชื่อสำหรับห้องเรียนนี้ */}
    </div>
  );
}
