// hooks/useProfile.ts

import { useEffect, useState } from 'react';
import { getProfile } from '@/services/authService';
import { UserProfile } from '@/types/user';

const useProfile = (token: string) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [role, setRole] = useState<'STUDENT' | 'TEACHER' | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile(token);
        setProfile(data);
        setRole(data.role); // แยก role
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchProfile();
  }, [token]);

  return { profile, role, loading, error };
};

export default useProfile;
