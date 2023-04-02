import axios from "axios";
import type { LoginResponse } from "@/app/api/auth/login/route";

type LoginParams = {
  email: string;
  password: string;
};
export const loginService = async ({
  email,
  password,
}: LoginParams): Promise<LoginResponse> => {
  const { data } = await axios.post<LoginResponse>("/api/auth/login", {
    email,
    password,
  });

  return { data: data.data, error: data.error };
};
