"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { registerUser } from "@/services/authService";
import { RegisterData } from "@/types/auth";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (data: RegisterData) => {
    try {
      setLoading(true);
      setError("");
      const response = await registerUser(data);
      console.log("Register success:", response);

      toast.success("Register successful! Redirecting to login...");
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (err: any) {
      if (err.response?.status === 409) {
        setError("This email is already registered.");
        toast.error("This email is already registered.");
      } else {
        const msg = err.response?.data?.message || "Registration failed.";
        setError(msg);
        toast.error(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  return { handleRegister, loading, error };
};
