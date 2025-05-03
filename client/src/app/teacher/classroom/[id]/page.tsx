// app/teacher/classroom/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';

export default function ClassroomDetailPage() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Classroom Detail</h1>
      <p className="text-gray-600">Classroom ID: {id}</p>
      {/* TODO: แสดงรายละเอียดห้องเรียน และฟีเจอร์เพิ่มเติม */}
    </div>
  );
}
