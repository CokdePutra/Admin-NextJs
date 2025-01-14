import React from "react";
import Link from "next/link";

interface ButtonPropTypes {
  label: string;
  link?: string;
  customClasses: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const ButtonDefault = ({
  label,
  link,
  customClasses,
  children,
  onClick,
}: ButtonPropTypes) => {
  if (link) {
    return (
      <Link
        className={`inline-flex items-center justify-center gap-2.5 text-center font-medium hover:bg-opacity-90 ${customClasses}`}
        href={link}
        onClick={onClick}
      >
        {children}
        {label}
      </Link>
    );
  }

  return (
    <button
      className={`inline-flex items-center justify-center gap-2.5 text-center font-medium hover:bg-opacity-90 ${customClasses}`}
      onClick={onClick}
    >
      {children}
      {label}
    </button>
  );
};

export default ButtonDefault;
