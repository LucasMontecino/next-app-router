import Avatars from "../components/Avatars";
import styles from "./page.module.css";

export async function getAvatars(number) {
  const res = await fetch(
    `https://tinyfac.es/api/data?limit=${number}&quality=0`
  );

  return res.json();
}

export default async function AvatarPage() {
  const data = await getAvatars(5);
  let avatars = data.map((item) => {
    return {
      id: crypto.randomUUID(),
      url: item.url,
      name: `${item.first_name} ${item.last_name}`,
    };
  });

  return (
    <div className={styles.main}>
      <Avatars avatars={avatars} />
    </div>
  );
}
