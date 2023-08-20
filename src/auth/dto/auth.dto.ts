import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator"

export class Signup {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  @Length(8, 16)
  password: string

  @IsString()
  @IsNotEmpty()
  @Length(4, 16)
  name: string

  @IsString()
  @IsNotEmpty()
  @Length(4, 16)
  username: string

}

export class Signin {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  @Length(8, 16)
  password: string
}