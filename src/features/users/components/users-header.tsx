import type { Dispatch } from 'react';
import { css } from '@/styled-system/css';

interface UsersHeaderProps {
  setIsAddModalOpen: Dispatch<boolean>;
}

export const UsersHeader: React.FC<UsersHeaderProps> = ({
  setIsAddModalOpen,
}) => {
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 8,
      })}
    >
      <h2 className={css({ fontWeight: 'bold', fontSize: '2xl' })}>Users</h2>
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
  );
};
