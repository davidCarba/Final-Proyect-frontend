export interface Auth {
  uuid: string;
  email: string;
  adress: string;
  cp: number;
  refreshToken: string;
  accessToken: string;
  fullName: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  uuid: string;
  email: string;
  expiresIn: number;
  refreshToken: string;
  accessToken: string;
}

export interface RegisterRequest {
  fullName: string;
  address: string;
  cp: number;
  email: string;
  password: string;
}

export interface Profile {
  uuid: string;
  fullName: string;
  address: string;
  cp: number;
}