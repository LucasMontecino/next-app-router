import HelloWorld from "../components/Hello";
import styles from "./page.module.css";

export default function sayHello() {
  return (
    <div className={styles.main}>
      <HelloWorld />
      <p>Have a good started</p>
    </div>
  );
}
