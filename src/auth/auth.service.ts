import { BadRequestException, ForbiddenException, Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { Register, Login } from "./dto";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class AuthService {
  constructor(private prisma: DatabaseService) { }

  async register(dto: Register) {
    try {
      const hash = await argon.hash(dto.password)
      const user = await this.prisma.users.create({
        data:
        {
          email: dto.email,
          password: hash,
          name: dto.name,
          username: dto.username
        }
      })

      delete user.password

      return user

    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code = 'P2002') {
          throw new ForbiddenException('Credentials taken')
        }
      }
    }
  }

  async login(dto: Login) {

    const user = await this.prisma.users.findFirst({ where: { email: dto.email } })

    if (!user) {
      throw new ForbiddenException('Credentials incorrect')
    }

    const passwordMatch = await argon.verify(user.password, dto.password)

    if (!passwordMatch) {
      throw new ForbiddenException('Credentials incorrect')
    }

    delete user.password
    return user
  }

}