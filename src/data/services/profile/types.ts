import { AppResponse } from "src/http-client/types";

type Profile = {
  id: string;
  name: string;
  dateOfBirth: string;
  level: "junior" | "middle" | "senior";
};

export type ProfilePayload = Omit<Profile, "id">;
export type ProfileResponse = Profile;

export interface ProfileService {
  getProfile(id: string): Promise<AppResponse<ProfileResponse>>;
  addProfile(payload: ProfilePayload): Promise<AppResponse<ProfileResponse>>;
}
