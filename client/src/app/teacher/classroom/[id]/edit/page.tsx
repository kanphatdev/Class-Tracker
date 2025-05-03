// app/teacher/classroom/[id]/edit/page.tsx
'use client';

import { useParams } from 'next/navigation';

export default function EditClassroomPage() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Edit Classroom</h1>
      <p className="text-gray-600">Editing classroom ID: {id}</p>
      {/* TODO: เพิ่มแบบฟอร์มแก้ไขห้องเรียนที่นี่ */}
    </div>
  );
}
