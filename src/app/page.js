import Link from "next/link";
import CustomButton from "./components/CustomButton";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>This is the Home Page Of the Avatar Application</h1>
      <p>Here you can access to special features</p>
      <CustomButton>
        <Link href={"/avatars"}>How about getting some avatars?</Link>
      </CustomButton>
    </main>
  );
}
