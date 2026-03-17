import styles from "./Paragraph.module.css";

export default function Paragraph({ text }) {
  return (
    <>
      <p className={styles.paragraph}>{text}</p>
    </>
  );
}
