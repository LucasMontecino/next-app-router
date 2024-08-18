import Link from "next/link";
import styles from "./styles/Navbar.module.css";

const navbar = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Avatars Page",
    path: "/avatars",
  },

  {
    id: 3,
    name: "Hello version",
    path: "/hello",
  },
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navbar.map(({ id, name, path }) => (
          <li key={id} className={styles.listItem}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
