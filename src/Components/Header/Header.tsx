import styles from "./Header.module.css";
import type { HeaderProps } from "./Header.props";

export default function Header({ title }: HeaderProps) {
  return (
    <>
      <h1 className={styles.header}>{title}</h1>
    </>
  );
}
