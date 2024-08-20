import Avatars from "../components/Avatars";
import { AvatarsProvider } from "../store/AvatarsContext";
import styles from "./page.module.css";

export default async function AvatarPage() {
  return (
    <div className={styles.main}>
      <Avatars />
    </div>
  );
}
