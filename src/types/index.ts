export type Project = {
    name: string;
    images: string[];
}

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
  phoneNumber: string
}

export type ApiResult = {type: 'success' | 'error', body: any}