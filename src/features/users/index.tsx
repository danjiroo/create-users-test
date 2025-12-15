'use client';
import { useState } from 'react';
import { css } from '@/styled-systemcss';
import { AddUserModal } from './components/add-user-modal';
import { useUsers } from './hooks/use-users';

export const UsersPage: React.FC = () => {
  const { data: users, isLoading, addUser } = useUsers();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  if (isLoading || !users) {
    return (
      <div
        className={css({
          h: '100dvh',
          w: 'full',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        Fetching users...
      </div>
    );
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
          <div
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 8,
            })}
          >
            <h2 className={css({ fontWeight: 'bold', fontSize: '2xl' })}>
              Users
            </h2>
            <div>
              <button
                type='button'
                className={css({
                  bg: '#44957d',
                  color: 'white',
                  px: 4,
                  py: 2,
                  borderRadius: 'sm',
                  cursor: 'pointer',
                  transition: 'all 0.2s linear',
                  _hover: {
                    bg: '#2b6352',
                  },
                })}
                onClick={() => setIsAddModalOpen(true)}
              >
                Create User
              </button>
            </div>
          </div>
          {users.length > 0 ? (
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
                <div
                  key={user.id}
                  className={css({
                    w: '250px',
                    p: 4,
                    bg: 'gray.100',
                    borderWidth: '0.0625rem',
                    borderStyle: 'solid',
                    borderColor: 'gray.200',
                    borderRadius: 'md',
                  })}
                >
                  <h6 className={css({ fontWeight: 'semibold' })}>
                    {user.name}
                  </h6>
                  <div>{user.company.name}</div>
                  <div>
                    <a
                      href={`mailto:${user.email}`}
                      className={css({
                        textDecoration: 'underline',
                        color: 'gray.500',
                      })}
                    >
                      {user.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={css({
                p: 8,
                textAlign: 'center',
              })}
            >
              No users found.
            </div>
          )}
        </div>
      </div>
    </>
  );
};
