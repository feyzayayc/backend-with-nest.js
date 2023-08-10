import { Controller, Post, Body, Injectable } from '@nestjs/common';
import { UserRegister } from 'src/types/user';

Injectable()

@Controller('user')

export class UserController {

  @Post('/register')
  async userRegister(@Body() body: UserRegister): Promise<void> {
    console.log(body)
  }
}
