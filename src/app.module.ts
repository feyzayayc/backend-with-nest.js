import { Module } from "@nestjs/common"
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [AuthModule, UserModule, PostModule, DatabaseModule]
})

export class AppModule {

}