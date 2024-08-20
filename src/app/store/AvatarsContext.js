"use client";

import { createContext, useContext, useState } from "react";

const AvatarsContext = createContext();

const useAvatarsContext = () => useContext(AvatarsContext);

function useAvatarsProvider(initialAvatars) {
  const [avatars, setAvatars] = useState(initialAvatars);
  const [loading, setLoading] = useState(false);

  const fetchAvatars = async (number) => {
    try {
      const req = await fetch(`api/avatars?number=${number}`);
      if (!req.ok) {
        throw new Error("Something went wrong!");
      }
      const res = await req.json();
      return res;
    } catch (error) {
      console.log(error.message);
    }
  };

  const addAvatar = async () => {
    setLoading(true);
    const newAvatar = await fetchAvatars(1);
    if (newAvatar) {
      setAvatars((prevAvatars) => [...prevAvatars, ...newAvatar]);
    }
    setLoading(false);
  };

  const refreshAvatar = async (id) => {
    setLoading(true);
    const newAvatar = await fetchAvatars(1);
    if (newAvatar) {
      setAvatars(
        avatars.map((avatar) => (avatar.id === id ? newAvatar[0] : avatar))
      );
    }
    setLoading(false);
  };

  const refreshAllAvatars = async () => {
    setLoading(true);
    const newAvatars = await fetchAvatars(avatars.length);
    if (newAvatars) {
      setAvatars(newAvatars);
    }
    setLoading(false);
  };

  return {
    avatars,
    addAvatar,
    refreshAvatar,
    refreshAllAvatars,
    loading,
  };
}

function AvatarsProvider({ children, initialAvatars }) {
  const avatarsProviderValue = useAvatarsProvider(initialAvatars);
  return (
    <AvatarsContext.Provider value={avatarsProviderValue}>
      {children}
    </AvatarsContext.Provider>
  );
}

export { AvatarsProvider, useAvatarsContext };
