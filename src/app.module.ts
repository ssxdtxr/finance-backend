import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { TransactionModule } from './transaction/transaction.module'
import { DbModule } from './db/db.module'

@Module({
  imports: [TransactionModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
