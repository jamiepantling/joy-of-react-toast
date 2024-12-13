import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, children, dismissMessage, id }) {
  const Icon = ICONS_BY_VARIANT[variant] || Info;

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} aria-hidden />
      </div>

      <VisuallyHidden>{variant} -</VisuallyHidden>
      <p className={styles.content}>{children}</p>

      <button
        className={styles.closeButton}
        onClick={() => dismissMessage(id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
