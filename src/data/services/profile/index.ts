import { HttpClient } from "src/http-client";

import { ProfilePayload, ProfileResponse, ProfileService } from "./types";

class Profile implements ProfileService {
  domainPrefix: string;

  constructor() {
    this.domainPrefix = "profile";
  }

  getProfile(id: string) {
    const result = new HttpClient().get<ProfileResponse>(
      `${this.domainPrefix}/get/${id}`
    );
    return result;
  }

  addProfile(payload: ProfilePayload) {
    const result = new HttpClient().post<ProfileResponse>(
      `${this.domainPrefix}/create`,
      payload
    );
    return result;
  }

  updateProfile(payload: ProfilePayload) {
    const result = new HttpClient().put<ProfileResponse>(
      `${this.domainPrefix}/create`,
      payload
    );
    return result;
  }
}

export const createProfileService = () => {
  return new Profile();
};
