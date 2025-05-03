import RequireAuth from "@/components/RequireAuth";
import TeacherDashboardLayout from "@/layout/TeacherDashboardLayout";
// app/teacher/dashboard/page.tsx
export default function TeacherDashboardPage() {
    return (
      <RequireAuth>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
        {/* Dashboard content here */}
      </div>
    </RequireAuth>
    );
  }
  