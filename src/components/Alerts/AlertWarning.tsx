"use client";

import { useEffect } from "react";

interface AlertWarningProps {
  message: string;
  onClose: () => void;
}

const AlertWarning: React.FC<AlertWarningProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Hilang otomatis dalam 3 detik

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 bg-yellow-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center z-999">
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-white font-bold">
        ✖
      </button>
    </div>
  );
};

export default AlertWarning;
