import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class AuthService {
  constructor(private prisma: DatabaseService) { }

  async signin() {
    return { msg: 'hello signin' }
  }

  async signup() {
    return { msg: 'hello signup' }
  }

}