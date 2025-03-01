import React from "react";
import Link from "next/link";

interface ButtonPropTypes {
  label: string;
  link?: string;
  customClasses: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const ButtonDefault: React.FC<ButtonPropTypes> = ({
  label,
  link,
  customClasses,
  children,
  onClick,
  type = "button",
}) => {
  if (link) {
    return (
      <Link 
        href={link} 
        className={`inline-flex items-center justify-center gap-2.5 text-center font-medium hover:bg-opacity-90 ${customClasses}`}
        onClick={onClick} // ✅ onClick dipasang langsung di Link
      >
        {children}
        {label}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2.5 text-center font-medium hover:bg-opacity-90 ${customClasses}`}
      onClick={onClick}
    >
      {children}
      {label}
    </button>
  );
};

export default ButtonDefault;
