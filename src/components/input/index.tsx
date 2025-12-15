import type { ComponentProps } from 'react';
import { css } from '@/styled-systemcss';

type CommonProps = {
  label?: string;
  error?: string;
};

export const Input: React.FC<ComponentProps<'input'> & CommonProps> = ({
  className,
  error,
  label,
  ...rest
}) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      })}
    >
      {!!label && (
        <div
          className={css({
            fontWeight: 'semibold',
          })}
        >
          {label}
        </div>
      )}

      <input
        {...rest}
        className={css({ border: '1px solid grey', px: 4, py: 2 })}
      />

      {!!error && (
        <p
          className={css({
            color: 'red',
            px: 4,
            py: 2,
          })}
        >
          {error}
        </p>
      )}
    </div>
  );
};
