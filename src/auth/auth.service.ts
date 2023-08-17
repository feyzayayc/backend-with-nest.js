import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {

  async signin() {
    return { msg: 'hello signin' }
  }

  async signup() {
    return { msg: 'hello signup' }
  }

}