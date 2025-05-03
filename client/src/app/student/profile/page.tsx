"use client";

import useProfile from "@/hooks/useProfile";

const StudentProfilePage = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") || "" : "";
  const { profile, loading, error } = useProfile(token);

  if (loading) return <p>Loading...</p>;
  if (error || !profile)
    return <p className="text-error">โหลดข้อมูลไม่สำเร็จ</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      <div className="avatar">
        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <span className="text-4xl flex items-center justify-center h-full bg-neutral text-neutral-content">
          {profile.name.charAt(0).toUpperCase()}
        </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full md:w-auto">
        <div className="card bg-primary/10 shadow-md p-4">
        <h2 className="card-title text-lg text-blue-500">Student's Name</h2>
        <p className="text-blue-700">{profile.name}</p>
        </div>
        <div className="card bg-accent shadow-md p-4">
        <h2 className="card-title text-lg text-emerald-600">Email</h2>
        <p className="text-success">{profile.email}</p>
        </div>
        <div className="card bg-warning/10 shadow-md p-4">
        <h2 className="card-title text-lg text-orange-800">Role</h2>
        <p className="text-warning">{profile.role}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StudentProfilePage;
