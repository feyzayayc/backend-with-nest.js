import { Module } from '@nestjs/common';
import { UserController } from './controllers/user';
import { AppService } from './service/app';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class AppModule { }
