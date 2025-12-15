'use client';
import { useEffect, useState } from 'react';
import { fetchUsers } from '../api/fetch-users';
import type { User } from '../types';

interface UseFetchUsersResult {
  data: User[] | null;
  isLoading: boolean;
  error: Error | null;
  addUser: (data: User) => void;
}

// usually i do separate fetch and mutations
// doing this for sharing local state for now without global state mgmt
export const useUsers = (): UseFetchUsersResult => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);

    const getUsers = async () => {
      setIsLoading(true);
      try {
        const result = await fetchUsers();
        if (result) setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers();
  }, []);

  const addUser = (user: User) => {
    setData((prev) => [...prev, user]);
  };

  return { data, isLoading, error, addUser };
};
