import RequireAuth from "@/components/RequireAuth";
import StudentDashboardLayout from "@/layout/StudentDashboardLayout"; 
  // app/student/dashboard/page.tsx
  export default function StudentDashboardPage() {
      return (
        <RequireAuth>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
        {/* Student Dashboard page content */}
      </div>
    </RequireAuth>
      );
    }
    