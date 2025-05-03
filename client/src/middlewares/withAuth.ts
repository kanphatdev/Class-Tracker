'use client';

import { useEffect } from 'react';
import { useRouter } from "next/navigation";

export const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthenticatedComponent = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');

      // ถ้าไม่มี token ให้ redirect ไปหน้า login
      if (!token) {
        router.replace('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};
