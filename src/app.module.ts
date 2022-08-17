import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {LogModule} from "./apps/log/log.module";
import {join} from "path";
import { ServeStaticModule } from '@nestjs/serve-static'

@Module({
  imports: [LogModule,ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client'),
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
