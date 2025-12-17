import { css } from '@/styled-system/css';

export const NoUsersFound: React.FC = () => {
  return (
    <div
      className={css({
        p: 8,
        textAlign: 'center',
      })}
    >
      No users found.
    </div>
  );
};
