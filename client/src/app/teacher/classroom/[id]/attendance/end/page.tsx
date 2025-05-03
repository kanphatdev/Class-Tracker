// app/teacher/classroom/[id]/attendance/end/page.tsx
'use client';

import { useParams } from 'next/navigation';

export default function EndAttendancePage() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">End Attendance</h1>
      <p className="text-gray-600">Classroom ID: {id}</p>
      {/* TODO: เพิ่มปุ่มสิ้นสุดการเช็กชื่อสำหรับห้องเรียนนี้ */}
    </div>
  );
}
