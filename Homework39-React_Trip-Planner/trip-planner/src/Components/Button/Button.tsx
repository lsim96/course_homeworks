import type { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  style?: React.CSSProperties;
  disabled?: boolean;
  onBtnClick?: () => void;
  children: ReactNode;
  type?: "submit" | "button" | "reset";
}

function Button({ style, disabled, children, type, onBtnClick }: ButtonProps) {
  return (
    <button
      className="Button"
      disabled={disabled}
      style={style}
      type={type ?? "button"}
      onClick={onBtnClick}
    >
      {children}
    </button>
  );
}
export default Button;
