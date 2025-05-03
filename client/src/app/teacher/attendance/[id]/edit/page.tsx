// app/teacher/attendance/[id]/edit/page.tsx
'use client';

import { useParams } from 'next/navigation';

export default function EditAttendancePage() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Edit Attendance</h1>
      <p className="text-gray-600">Attendance ID: {id}</p>
      {/* TODO: แก้ไขข้อมูลการเช็กชื่อของนักเรียน */}
    </div>
  );
}
