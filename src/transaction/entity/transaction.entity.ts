import { ApiProperty } from '@nestjs/swagger'
import { $Enums, Transaction } from '@prisma/client'

export class TransactionEntity implements Transaction {
  @ApiProperty()
  id: number

  @ApiProperty()
  title: string

  @ApiProperty()
  category: $Enums.Category

  @ApiProperty()
  price: number

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
