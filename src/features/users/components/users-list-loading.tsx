import { css } from '@/styled-system/css';

export const UsersListLoading: React.FC = () => {
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
};
