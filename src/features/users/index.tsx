'use client';
import { useState } from 'react';
import { css } from '@/styled-system/css';
import { AddUserModal } from './components/add-user-modal';
import { NoUsersFound } from './components/no-users-found';
import { UsersHeader } from './components/users-header';
import { UsersList } from './components/users-list';
import { UsersListLoading } from './components/users-list-loading';
import { useUsers } from './hooks/use-users';

export const UsersPage: React.FC = () => {
  const { data: users, isLoading, addUser, deleteUser } = useUsers();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  if (isLoading || !users) {
    return <UsersListLoading />;
  }

  return (
    <>
      {isAddModalOpen && (
        <AddUserModal
          title='Add New User'
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAddUser={(data) => {
            addUser(data);
            setIsAddModalOpen(false);
          }}
        />
      )}

      <div
        className={css({
          w: 'full',
          h: '100dvh',
          color: 'gray.900',
        })}
      >
        <div className={css({ maxW: '1240px', m: '0 auto' })}>
          <UsersHeader setIsAddModalOpen={setIsAddModalOpen} />
          {users.length > 0 ? (
            <UsersList users={users} onDelete={deleteUser} />
          ) : (
            <NoUsersFound />
          )}
        </div>
      </div>
    </>
  );
};
