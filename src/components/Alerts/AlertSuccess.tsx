"use client";

import { useEffect } from "react";

interface AlertSuccessProps {
  message: string;
  onClose: () => void;
}

const AlertSuccess: React.FC<AlertSuccessProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center z-999">
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-white font-bold">
        ✖
      </button>
    </div>
  );
};

export default AlertSuccess;
