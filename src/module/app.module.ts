import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { Auth } from '../middleware/auth'
import { UsersService } from 'src/users/users.service';
import { UsersController } from 'src/users/users.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Auth)
      .forRoutes('*');
  }
}