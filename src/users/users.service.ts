import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersService {

  getPost(): Promise<Array<number>> {

    return new Promise<Array<number>>((resolve) =>
      setTimeout(() => {
        resolve([1, 3, 4, 6, 7])
      }, 3000))

  }
}