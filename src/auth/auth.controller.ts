import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Signup, Signin } from "./dto";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('/signup')
  // async signup(@Body() dto: AuthDto) {
  async signup(@Body() dto: Signup) {
    return this.authService.signup(dto)
  }

  @Post('/signin')
  async signin(@Body() dto: Signin) {
    return this.authService.signin(dto)
  }
}