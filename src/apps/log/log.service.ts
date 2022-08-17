import { Inject, Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { LogDocument } from './log.schema'

@Injectable()
export class LogService {
  constructor(
    @Inject('MONGODB_CONNECTION_LogRepository')
    private coverageModel: Model<LogDocument>,
  ) {}
  async listLog(params){
    const {current,pageSize} = params
    const filterIllegal = (data)=>Object.keys(data)
        .filter((key) => data[key] !== null && data[key] !== undefined)
        .reduce((acc, key) => ({ ...acc, [key]: data[key] }), {});
    const f = {
      level:params.level,
      msg: {
        $regex: RegExp(params.msg)
      },
      tags:{
        $in:params.tags === ''?[]:(params.tags||'').split(',').map(i=>i)
      },
      createdAt : {
        "$gte" : params.startTime,
        "$lt" : params.endTime
      }
    }
    if (params.tags === '' || params.tags === undefined){
      delete f.tags
    }
    if (params.msg === '' || params.msg === undefined){
      delete f.msg
    }
    if (params.startTime === undefined || params.endTime === undefined){
      delete f.createdAt
    }
    const ft = filterIllegal(f)
    let total:number=await this.coverageModel.countDocuments(ft)
    return {
      data:(await this.coverageModel.find(ft).skip((current-1)*(pageSize-0)).limit((pageSize-0))),
      total
    }
  }
  async postLog(params){
    return this.coverageModel.insertMany([params])
  }
}
