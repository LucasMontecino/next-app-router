"use client";

import Image from "next/image";
import styles from "./styles/Avatars.module.css";
import CustomButton from "./CustomButton";
import { LuImagePlus } from "react-icons/lu";
import { useAvatarsContext } from "../store/AvatarsContext";

export default function Avatars() {
  const { avatars, addAvatar, refreshAvatar, refreshAllAvatars, loading } =
    useAvatarsContext();

  return (
    <>
      <div className={styles.avatars}>
        {avatars.map((avatar) => (
          <div key={avatar.id} className={styles.avatar}>
            <Image
              src={avatar.src}
              alt={avatar.name}
              width={240}
              height={240}
            />
            <h3>{avatar.name}</h3>
            <CustomButton onClick={() => refreshAvatar(avatar.id)}>
              Refresh Avatar
            </CustomButton>
          </div>
        ))}
        <button className={styles.addBtn} onClick={addAvatar}>
          <LuImagePlus size={120} color="rgba(46, 204, 113, .9)" />
        </button>
      </div>

      <CustomButton onClick={refreshAllAvatars}>
        Refresh All Avatars
      </CustomButton>
    </>
  );
}
