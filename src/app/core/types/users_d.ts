export interface Users{
  email: string;
  username?: string;
  password: string;
}

export interface responseUsers{
  users: Users[]
}
