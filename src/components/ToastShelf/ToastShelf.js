import React from 'react';
import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, dismissMessage } = React.useContext(ToastContext);

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {' '}
      {toasts.map((toast) => (
        <Toast
          dismissMessage={dismissMessage}
          variant={toast.variant}
          key={toast.id}
          id={toast.id}
        >
          {toast.message}
        </Toast>
      ))}
    </ol>
  );
}

export default ToastShelf;
