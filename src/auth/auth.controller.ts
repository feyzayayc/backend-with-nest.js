import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Register, Login } from "./dto";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('/register')
  async register(@Body() dto: Register) {
    return this.authService.register(dto)
  }

  @Post('/login')
  async login(@Body() dto: Login) {
    return this.authService.login(dto)
  }
}