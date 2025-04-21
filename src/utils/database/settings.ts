import { IDBSettings } from "@/types/common"

export const GetDBSettings = (): IDBSettings => {
    const env = process.env.NODE_ENV
  
    if (env == 'development')
      return {
        host: process.env.host_dev!, //'58.84.143.251',
  
        port: parseInt(process.env.port_dev!),
  
        user: process.env.user_dev!,
  
        password: process.env.password_dev!,
  
        database: process.env.database_dev!,
      }
    else
      return {
        host: process.env.host_prod!, //'58.84.143.251',
  
        port: parseInt(process.env.port_prod!),
  
        user: process.env.user_prod!,
  
        password: process.env.password_prod!,
  
        database: process.env.database_prod!,
      }
  }