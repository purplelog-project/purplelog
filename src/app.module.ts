import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {LogModule} from "./apps/log/log.module";

@Module({
  imports: [LogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
