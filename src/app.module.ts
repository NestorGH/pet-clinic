import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [DatabaseModule, UserModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
