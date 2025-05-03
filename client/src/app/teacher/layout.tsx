// app/teacher/layout.tsx
'use client';
import RequireAuth from "@/components/RequireAuth";
import TeacherDashboardLayout from "@/layout/TeacherDashboardLayout";

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireAuth>
      <TeacherDashboardLayout>{children}</TeacherDashboardLayout>
    </RequireAuth>
  );
}
