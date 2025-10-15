export class CreateUserDto {
  fullName: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
}
