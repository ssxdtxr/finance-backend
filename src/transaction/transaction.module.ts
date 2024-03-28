import { Module } from '@nestjs/common'
import { TransactionService } from './transaction.service'
import { TransactionController } from './transaction.controller'
import { DbService } from 'src/db/db.service'

@Module({
  controllers: [TransactionController],
  providers: [TransactionService, DbService],
})
export class TransactionModule {}
