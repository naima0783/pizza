class User {
  id?: number;
  username: string;
  firstName?: string;
  lastName?: string;
  role: string;
  adress?: string;
  password?: string;
  constructor(
    username: string,
    role: string,
    firstName?: string,
    lastName?: string,
    adress?: string,
    password?: string,
    id?: number
  ) {
    this.id = id;
    this.username = username;
    this.role = role;

    this.firstName = firstName; //first name
    this.lastName = lastName; //last Name
    this.adress = adress; //address
    this.password = password;
  }
}

export default User;
