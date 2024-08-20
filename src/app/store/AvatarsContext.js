"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import {
  ADD_AVATAR,
  INITIAL_AVATARS,
  REFRESH_ALL_AVATARS,
  REFRESH_AVATAR,
  rootReducer,
} from "./rootReducer";

const AvatarsContext = createContext();

const useAvatarsContext = () => useContext(AvatarsContext);

function useAvatarsProvider() {
  const [state, dispatch] = useReducer(rootReducer, { avatars: [] });
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

  const loaderAvatars = async () => {
    setLoading(true);
    const newAvatars = await fetchAvatars(5);
    if (newAvatars) {
      dispatch({
        type: INITIAL_AVATARS,
        payload: newAvatars,
      });
    }
    setLoading(false);
  };

  const addAvatar = async () => {
    setLoading(true);
    const newAvatar = await fetchAvatars(1);
    if (newAvatar) {
      dispatch({
        type: ADD_AVATAR,
        payload: newAvatar,
      });
    }
    setLoading(false);
  };

  const refreshAvatar = async (id) => {
    setLoading(true);
    const newAvatar = await fetchAvatars(1);
    if (newAvatar) {
      dispatch({
        type: REFRESH_AVATAR,
        payload: {
          id,
          newAvatar: newAvatar,
        },
      });
    }
    setLoading(false);
  };

  const refreshAllAvatars = async () => {
    setLoading(true);
    const newAvatars = await fetchAvatars(state.avatars.length);
    if (newAvatars) {
      dispatch({
        type: REFRESH_ALL_AVATARS,
        payload: newAvatars,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    loaderAvatars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    avatars: state.avatars,
    addAvatar,
    refreshAvatar,
    refreshAllAvatars,
    loading,
  };
}

function AvatarsProvider({ children }) {
  const avatarsProviderValue = useAvatarsProvider();
  return (
    <AvatarsContext.Provider value={avatarsProviderValue}>
      {children}
    </AvatarsContext.Provider>
  );
}

export { AvatarsProvider, useAvatarsContext };
