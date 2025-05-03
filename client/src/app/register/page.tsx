"use client";

import { useState } from "react";
import Link from "next/link";
import { UserPlus } from "lucide-react";
import { useRegister } from "@/hooks/useRegister";

const Register = () => {
  const { handleRegister, loading, error } = useRegister();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegister({ email, password, name, role });  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-6 bg-base-200 rounded-lg shadow-md space-y-4"
      >
        <fieldset>
          <legend className="text-xl font-semibold flex items-center gap-2 mb-2">
            <UserPlus className="w-5 h-5" /> Register
          </legend>

          <div className="tabs tabs-boxed mb-4">
            <Link href="/login" className="tab capitalize">
              Login
            </Link>
            <Link href="/register" className="tab tab-active capitalize">
              Signup
            </Link>
          </div>

          {error && (
            <div className="alert alert-error text-sm mb-2">
              <span>{error}</span>
            </div>
          )}

          <label className="label">Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input input-bordered w-full"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="label">Role</label>
          <select
            className="select select-bordered w-full"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="" disabled>
              Choose role
            </option>
            <option value="STUDENT">Student</option>
            <option value="TEACHER">Teacher</option>
          </select>

          <button
            type="submit"
            className="btn btn-primary w-full mt-6"
            disabled={loading}
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
