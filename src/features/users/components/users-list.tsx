import { css } from '@/styled-system/css';
import type { User } from '../types';

import { UserCard, type UserCardProps } from './user-card';

interface UsersListProps extends Pick<UserCardProps, 'onDelete'> {
  users: User[];
}

export const UsersList: React.FC<UsersListProps> = ({
  users = [],
  onDelete,
}) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexWrap: 'wrap',
        w: 'full',
        justifyContent: 'center',
        gap: 5,
      })}
    >
      {users.map((user) => (
        <UserCard key={user.id} user={user} onDelete={onDelete} />
      ))}
    </div>
  );
};
