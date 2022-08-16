import { Connection as MongoConnection } from 'mongoose'
import {LogSchema} from "./log.schema";
export const logProviders = [
  {
    provide: 'MONGODB_CONNECTION_LogRepository',
    useFactory: (connection: MongoConnection) =>
      connection.model(
        'log_model',
          LogSchema,
        'log',
      ),
    inject: ['MONGODB_CONNECTION'],
  },
]
