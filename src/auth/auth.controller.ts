import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('/signup')
  async signup(@Body() dto: AuthDto) {
  // async signup(@Body('email') email: string, @Body('password') password: string) {
    return this.authService.signup()
  }

  @Post('/signin')
  async signin() {
    return this.authService.signin()
  }
}