"use client"
import { useLogin } from "@/hooks/useLogin";
import Link from "next/link";
import { useState } from "react";

const LogIn = () => {
  const { login, loading, error } = useLogin();

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    role: "STUDENT",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
       <form onSubmit={onSubmit}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <div role="tablist" className="tabs tabs-border">
          <Link href="/login" role="tab" className="tab tab-active capitalize">log in</Link>
          <Link href="/register" role="tab" className="capitalize tab">register</Link>
        </div>

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />

        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
          value={form.password}
          onChange={onChange}
        />

        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Username"
          value={form.name}
          onChange={onChange}
        />

        <label className="label">Role</label>
        <select
          name="role"
          value={form.role}
          onChange={onChange}
          className="select select-ghost"
        >
          <option value="STUDENT">STUDENT</option>
          <option value="TEACHER">TEACHER</option>
        </select>

        {error && <p className="text-error mt-2">{error}</p>}

        <button className="btn btn-neutral mt-4" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
      </fieldset>
    </form>
    </div>
   
  );
};

export default LogIn;
