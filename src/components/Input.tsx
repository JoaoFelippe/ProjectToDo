import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface props extends InputHTMLAttributes<HTMLInputElement> {
  customCss?: string
}

export function Input({customCss = '', ...props }: props) {
  return <input 
  className={customCss == '' ? styles.container : customCss} 
  {...props} 
  />;
}
