'use client';
import { useEffect, useState } from 'react';

let triggerMsg = () => {};

export function ShowMsgContainer() {
  const [toast, setToast] = useState({ msg: '', color: '' });

  useEffect(() => {
    triggerMsg = (msg, color = 'green') => {
      setToast({ msg, color });
      setTimeout(() => setToast({ msg: '', color: '' }), 3000);
    };
  }, []);

  const colorAlert =
    toast.color === 'red'
      ? 'alert-error'
      : toast.color === 'green'
      ? 'alert-success'
      : toast.color === 'yellow'
      ? 'alert-warning'
      : '';

  return (
    toast.msg && (
      <div role='alert' className={`alert ${colorAlert} fixed bottom-4 right-4 z-50 shadow-lg`}>
        <span>{toast.msg}</span>
      </div>
    )
  );
}

export function ShowMsg(msg, color) {
  triggerMsg(msg, color);
}
