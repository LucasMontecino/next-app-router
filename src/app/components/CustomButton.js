import styles from "./styles/CustomButton.module.css";

export default function CustomButton({ children, onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}
