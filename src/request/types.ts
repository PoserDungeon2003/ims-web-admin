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

export type ApplyApplicationForm = {
  firstName: string
  lastName: string
  email: string;
  phone: number;
  resume?: FileList;
  coverLetter?: FileList;
  appliedTo: string;
}

export type JobOpening = {
  id: number;
  name: string;
  status: 'open' | 'closed';
  description?: string;
}