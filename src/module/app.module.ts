import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { AppService } from '../service/app';
import { Auth } from '../middleware/auth'

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Auth)
      .forRoutes('*');
  }
}