'use client';
import { css, cx } from '@/styled-system/css';

export interface ModalProps {
  isOpen: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  children,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={cx(
        css({
          position: 'fixed',
          inset: 0,
          bg: '#808080b0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }),
      )}
      onClick={onClose}
    >
      <div
        className={css({
          bg: 'white',
          borderRadius: 'lg',
          w: 'full',
          maxW: '95%',
          maxH: '80%',
          overflowY: 'auto',
          p: 6,
          shadow: 'lg',
          md: {
            w: '800px',
          },
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div
            className={css({
              fontSize: 'lg',
              fontWeight: 'bold',
              mb: 4,
            })}
          >
            {title}
          </div>
        )}

        <div>{children}</div>
      </div>
    </div>
  );
};
