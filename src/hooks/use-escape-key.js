import React from 'react';

export default function useEscapeKey(f) {
  React.useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === 'Escape') {
        f();
      }
    }
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [f]);
}
