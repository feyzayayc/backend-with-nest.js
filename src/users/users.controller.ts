import { Controller, Get } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('user')

export class UsersController {

  constructor(private userService: UsersService) { }
  @Get()
  getPost(): Promise<Array<number>> {
    const x = this.userService.getPost()
    return x
  }
}