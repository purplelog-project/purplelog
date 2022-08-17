import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type LogDocument = Log & Document

enum LevelEnum {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  FATAL = 'fatal'
}

@Schema()
export class Log {
  @Prop()
  tags: string[]
  @Prop()
  level: LevelEnum
  @Prop()
  msg: string
  @Prop({
    default:()=>new Date()
  })
  createdAt: Date
}

export const LogSchema = SchemaFactory.createForClass(Log)
