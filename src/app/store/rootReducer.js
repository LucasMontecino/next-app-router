export const INITIAL_AVATARS = "initial_avatars";
export const ADD_AVATAR = "add_avatar";
export const REFRESH_AVATAR = "refresh_avatar";
export const REFRESH_ALL_AVATARS = "refresh_all_avatars";

export function rootReducer(state, action) {
  switch (action.type) {
    case INITIAL_AVATARS: {
      return {
        ...state,
        avatars: action.payload,
      };
    }

    case ADD_AVATAR: {
      return {
        ...state,
        avatars: [...state.avatars, ...action.payload],
      };
    }

    case REFRESH_AVATAR: {
      return {
        ...state,
        avatars: state.avatars.map((avatar) =>
          avatar.id === action.payload.id ? action.payload.newAvatar[0] : avatar
        ),
      };
    }

    case REFRESH_ALL_AVATARS: {
      return {
        ...state,
        avatars: action.payload,
      };
    }
  }
}
