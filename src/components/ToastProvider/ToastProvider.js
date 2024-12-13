import React from 'react';
import useEscapeKey from '../../hooks/use-escape-key';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [variant, setVariant] = React.useState('notice');
  const [message, setMessage] = React.useState('');
  const [toasts, setToasts] = React.useState([]);

  function dismissMessage(id) {
    let newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  }
  const handleEscape = React.useCallback(() => {
    if (toasts.length) {
      setToasts([]);
    }
  }, [toasts.length]);

  useEscapeKey(handleEscape);

  return (
    <ToastContext.Provider
      value={{
        variant,
        setVariant,
        message,
        setMessage,
        toasts,
        setToasts,
        dismissMessage,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
