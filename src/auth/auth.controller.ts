import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Register, Login } from "./dto";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('/register')
  // async signup(@Body() dto: AuthDto) {
  async signup(@Body() dto: Register) {
    return this.authService.signup(dto)
  }

  @Post('/login')
  async signin(@Body() dto: Login) {
    return this.authService.signin(dto)
  }
}