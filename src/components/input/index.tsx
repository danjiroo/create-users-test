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
        gap: 2,
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
        className={css({
          borderWidth: '0.0625rem',
          borderStyle: 'solid',
          borderColor: error ? 'red' : 'grey',
          borderRadius: 'sm',
          px: 4,
          py: 2,
          _focus: {
            borderColor: 'grey',
            outline: 'none',
          },
          _active: {
            borderColor: 'grey',
          },
        })}
      />

      {!!error && (
        <p
          className={css({
            color: 'red',
          })}
        >
          {error}
        </p>
      )}
    </div>
  );
};
