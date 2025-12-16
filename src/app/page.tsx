import Link from 'next/link';
import { css } from '@/styled-system/css';

const Home = () => {
  return (
    <div
      className={css({
        w: 'full',
        h: '100dvh',
        color: 'gray.900',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 4,
      })}
    >
      Hello!
      <Link href='/users'>
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
        >
          Go to Users Page
        </button>
      </Link>
    </div>
  );
};

export default Home;
