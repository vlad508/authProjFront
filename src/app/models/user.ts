export class User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export class LoginResponse {
  result: number;
  token: string;
  error: string;
}

export class UserResponse extends LoginResponse {
  user: User;
}
