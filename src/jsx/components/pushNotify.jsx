// Notification.js (or a separate file)

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function pushNotify(status, title, text) {
  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000, // Close the notification after 5 seconds (adjust as needed)
    hideProgressBar: false,
    closeButton: true,
    pauseOnHover: true,
    draggable: true,
  };

  const notify = () => {
    toast(text, {
      ...toastOptions,
      type: toast.TYPE[status.toUpperCase()], // Convert status to uppercase for type
      className: `toast-${status}`,
      bodyClassName: `toast-${status}-body`,
    });
  };

  notify();
}
