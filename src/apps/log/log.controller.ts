import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common'
import {LogService} from "./log.service";

@Controller('')
export class LogController {
  constructor(
    private readonly logService: LogService,
  ) {}


  @Get('/triggeragg')
  triggeragg(@Body() params: any) {
    //commitSha、reportId
    return this.logService.invoke()
    // 触发聚合覆盖率
  }
}
