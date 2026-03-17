import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.props";

export default function Button({ text, ...props }: ButtonProps) {
  return (
    <button className={styles["button"]} {...props}>
      {text}
    </button>
  );
}
