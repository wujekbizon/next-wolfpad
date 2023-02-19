export interface User {
  id: number; // check what type will get back from Mongodb
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
