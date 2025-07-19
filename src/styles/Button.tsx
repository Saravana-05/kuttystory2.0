import React from "react";
import { Link } from "react-router-dom";
import { buttons } from "./Theme";

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: keyof typeof buttons;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "cta",
  to,
  href,
  target,
  rel,
  type,
  ...props
}) => {
  const btn = buttons[variant];
  const className = `${btn.className} ${props.className || ""}`;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor =
      btn.hoverStyle?.backgroundColor || "";
    e.currentTarget.style.color = btn.hoverStyle?.color || "";
    e.currentTarget.style.transition = "all 0.3s ease"; // Optional: smooth transition
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor =
      btn.baseStyle?.backgroundColor || "";
    e.currentTarget.style.color = btn.baseStyle?.color || "";
  };

  if (to) {
    return (
      <Link
        to={to}
        className={className}
        style={btn.baseStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={className}
        style={btn.baseStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={className}
      style={btn.baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
