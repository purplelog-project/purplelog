import { Inject, Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { LogDocument } from './log.schema'

@Injectable()
export class LogService {
  constructor(
    @Inject('MONGODB_CONNECTION_LogRepository')
    private coverageModel: Model<LogDocument>,
  ) {}
  async invoke(){
    return this.coverageModel.find({})
  }
}
