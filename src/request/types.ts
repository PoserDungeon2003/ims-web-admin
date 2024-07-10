export type BaseResponse = {
  success: number;
  message?: string;
}

export type LoginRS = {
  email: string,
  id: number,
  name: string,
  token?: string,
  refreshToken?: string,
  role?: string
}