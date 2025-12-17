import { css } from '@/styled-system/css';
import type { User } from '../types';

export interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  const { id, name, company, email } = user;

  return (
    <div
      key={id}
      className={css({
        w: '250px',
        p: 4,
        bg: 'gray.100',
        borderWidth: '0.0625rem',
        borderStyle: 'solid',
        borderColor: 'gray.200',
        borderRadius: 'md',
        position: 'relative',
      })}
    >
      <button
        type='button'
        onClick={() => onDelete(id)}
        className={css({
          position: 'absolute',
          top: 4,
          right: 4,
          cursor: 'pointer',
          _hover: {
            opacity: 0.7,
          },
        })}
      >
        x
      </button>
      <h6 className={css({ fontWeight: 'semibold' })}>{name}</h6>
      <div>{company.name}</div>
      <div>
        <a
          href={`mailto:${email}`}
          className={css({
            textDecoration: 'underline',
            color: 'gray.500',
          })}
        >
          {email}
        </a>
      </div>
    </div>
  );
};
