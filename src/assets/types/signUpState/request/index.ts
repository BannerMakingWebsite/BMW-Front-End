export type SignUpStateRequestType = {
  name: string;
  password: string;
  passwordConfirm?: string;
  email: string;
  authKey?: string;
};
