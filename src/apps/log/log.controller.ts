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


  @Get('/log')
  listLog(@Query() params: any) {
    console.log(params,'params')
    return this.logService.listLog(params)
  }

  @Post('/log')
  postLog(@Body() params: any) {
    return this.logService.postLog(params)
  }
}
