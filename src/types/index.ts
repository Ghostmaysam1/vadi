export type Project = {
    name: string;
    images: string[];
}

export type ValidationError = {
  message: string
}

export type UserData = Omit<RegisterData, 'password' | 'confirmPassword'>;

export type Member = {
    id: string;
    name: string;
    position: string;
    bio: string;
    image: string;
    projects?: Project[]
}

export type RegisterData = {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    address?: string,
    emailAddress?: string,
    password: string,
    confirmPassword: string
}

export type LoginData = {
  phoneNumber: string,
  password: string
}

export type ForgotPasswordData = {
  phoneNumber: string,
}

export type VerifyConfirmationCodeData = {
  phoneNumber: string,
  token: string
}

export type ResetPasswordData = {
  phoneNumber: string,
  token: string,
  newPassword: string,
  confirmNewPassword: string
}

export type AllowedDataTypes = (LoginData | RegisterData | ForgotPasswordData | ForgotPasswordData | ResetPasswordData | VerifyConfirmationCodeData)

export namespace ApiResponses {
  
  type ApiError = {
    type: string,
    title: string,
    detail: string,
    instance: string
  }

  interface Error401 extends ApiError {
    status: 401
  }

  interface Error400 extends ApiError {
    status: 400
  }

  interface Error404 extends ApiError {
    status: 404
  }

  export interface ApiResponseMap {
    '/auth/login': Error401,
    '/auth/register': Error400,
    '/auth/forgotPassword': Error401,
    '/auth/resetPassword': Error400 | Error401,
    '/auth/changePassword': Error400,
    '/coworker': Error404,
    '/coworker/': Error404
  }
}

export type ApiResult = {type: 'success' | 'error', body: any}