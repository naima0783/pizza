class User {
  phonenumber: string;
  firstname?: string;
  lastname?: string;
  role: string;
  address?: string;
  password?: string;
  constructor(
    username: string,
    role: string,
    firstName?: string,
    lastName?: string,
    address?: string,
    password?: string
  ) {
    this.phonenumber = username;
    this.role = role;

    this.firstname = firstName;
    this.lastname = lastName;
    this.address = address;
    this.password = password;
  }
}

export default User;
