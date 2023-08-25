import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator"

export class Register {
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

export class Login {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  @Length(8, 16)
  password: string
}