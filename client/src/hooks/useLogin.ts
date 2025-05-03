'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";
import axios from 'axios';

interface LoginPayload {
  email: string;
  password: string;
  name: string;
  role: 'TEACHER' | 'STUDENT';
}

export function useLogin() {
  const router = useRouter(); // ✅
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async ({ email, password, name, role }: LoginPayload) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
        name,
        role,
      });

      localStorage.setItem('token', response.data.token);

      if (role === 'TEACHER') {
        router.push('/teacher/dashboard'); // ✅
      } else if (role === 'STUDENT') {
        router.push('/student/dashboard'); // ✅
      } else {
        router.push('/dashboard'); // fallback
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'เข้าสู่ระบบล้มเหลว');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
