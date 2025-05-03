// app/teacher/classroom/[id]/students/page.tsx
'use client';

import { useParams } from 'next/navigation';

export default function ClassroomStudentsPage() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Students in Classroom</h1>
      <p className="text-gray-600">Classroom ID: {id}</p>
      {/* TODO: แสดงรายชื่อนักเรียนในห้องเรียนนี้ */}
    </div>
  );
}
