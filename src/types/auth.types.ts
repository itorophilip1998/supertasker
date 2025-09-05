export type SignUpDataType = {
  username: string;
  email: string;
  password: string;
  loading: boolean;
};
export const initialSignUpData: SignUpDataType = {
  username: "",
  email: "",
  password: "",
  loading: false,
};