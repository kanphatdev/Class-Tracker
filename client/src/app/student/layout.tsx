'use client';

import RequireAuth from "@/components/RequireAuth";
import StudentDashboardLayout from "@/layout/StudentDashboardLayout";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireAuth>
      <StudentDashboardLayout>{children}</StudentDashboardLayout>
    </RequireAuth>
  );
}
