import { api } from "./api";

type LoginResponse = {
  access: string;
  refresh: string;
};

export const login = async (username: string, password: string) => {
  const response = await api.post<LoginResponse>("/token/", {
    username,
    password,
  });

  localStorage.setItem("accessToken", response.data.access);
  localStorage.setItem("refreshToken", response.data.refresh);

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
