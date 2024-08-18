"use client";

import Image from "next/image";
import styles from "./styles/Avatars.module.css";
import CustomButton from "./CustomButton";
import { useState } from "react";
import { getAvatars } from "../avatars/page";
import { LuImagePlus } from "react-icons/lu";

export default function Avatars({ avatars: initialAvatars }) {
  const [avatars, setAvatars] = useState(initialAvatars);

  const handleRefreshAvatar = async (id) => {
    const data = await getAvatars(1);

    const newAvatar = {
      id: crypto.randomUUID(),
      url: data[0].url,
      name: `${data[0].first_name} ${data[0].last_name}`,
    };

    setAvatars(
      avatars.map((avatar) => (avatar.id === id ? newAvatar : avatar))
    );
  };

  const handleNewAvatar = async () => {
    const data = await getAvatars(1);
    const newAvatar = {
      id: crypto.randomUUID(),
      url: data[0].url,
      name: `${data[0].first_name} ${data[0].last_name}`,
    };

    setAvatars((prevAvatars) => [...prevAvatars, newAvatar]);
  };

  const handleRefreshAllAvatars = async () => {
    const data = await getAvatars(avatars.length);
    const newAvatars = data.map((avatar) => {
      return {
        id: crypto.randomUUID(),
        url: avatar.url,
        name: `${avatar.first_name} ${avatar.last_name}`,
      };
    });
    setAvatars(newAvatars);
  };

  return (
    <>
      <div className={styles.avatars}>
        {avatars.map((avatar) => (
          <div key={avatar.id} className={styles.avatar}>
            <Image
              src={avatar.url}
              alt={avatar.name}
              width={240}
              height={240}
            />
            <h3>{avatar.name}</h3>
            <CustomButton onClick={() => handleRefreshAvatar(avatar.id)}>
              Refresh Avatar
            </CustomButton>
          </div>
        ))}
        <button className={styles.addBtn} onClick={handleNewAvatar}>
          <LuImagePlus size={120} color="rgba(46, 204, 113, .9)" />
        </button>
      </div>

      <CustomButton onClick={handleRefreshAllAvatars}>
        Refresh All Avatars
      </CustomButton>
    </>
  );
}
