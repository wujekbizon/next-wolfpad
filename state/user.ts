export interface User {
  _id?: number; // check what type will get back from Mongodb
  name: string;
  email: string;
  password: string;
  checked: boolean;
  isAdmin?: boolean;
}
