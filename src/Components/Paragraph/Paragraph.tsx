import styles from "./Paragraph.module.css";
import type { ParagraphProps } from "./Paragraph.props";

export default function Paragraph({ text }: ParagraphProps) {
  return (
    <>
      <p className={styles.paragraph}>{text}</p>
    </>
  );
}
