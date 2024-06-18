import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface attributeButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  nameButton?: string;
  iconButton: React.ReactNode;
  customCss?: string;
}

export function Button({
  nameButton,
  iconButton,
  customCss = "",
  ...props
}: attributeButton) {
  return (
    <button className={customCss == '' ? styles.container: customCss} {...props}>
      {nameButton} {iconButton}
    </button>
  );
}
