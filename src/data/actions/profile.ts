import { createAction } from "@reduxjs/toolkit";

export const fetchProfileAction = createAction(
  "FETCH_PROFILE",
  (id: string) => {
    return {
      payload: {
        id,
      },
    };
  }
);

export const resetFetchProfileAction = createAction("RESET_FETCH_PROFILE");
