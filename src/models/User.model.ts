export type UserModel = {
  id: string;
  avatarUrl: string;
  name?: string | null;
  login: string;
  email: string;
  bio?: string | null;
};
