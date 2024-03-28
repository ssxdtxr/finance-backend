import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { DbService } from 'src/db/db.service'

@Module({
  controllers: [AuthController],
  providers: [AuthService, DbService],
})
export class AuthModule {}
