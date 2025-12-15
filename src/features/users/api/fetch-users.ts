import type { User } from '../types';

export const fetchUsers = async (): Promise<User[]> => {
  const result = await fetch('/users.json');

  if (!result) {
    throw new Error('No users found.');
  }
  return result.json();
};
