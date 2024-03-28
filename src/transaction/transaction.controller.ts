import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'
import { TransactionService } from './transaction.service'
import { Prisma } from '@prisma/client'
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger'
import { TransactionEntity } from './entity/transaction.entity'

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  @ApiCreatedResponse({ type: TransactionEntity })
  create(@Body() dto: Prisma.TransactionCreateInput) {
    return this.transactionService.create(dto)
  }

  @Get()
  @ApiOkResponse({ type: TransactionEntity, isArray: true })
  findAll(
    @Query('page') page?: number | null,
    @Query('limit') limit?: number | null
  ) {
    return this.transactionService.findAll(page, limit)
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.transactionService.findOne(+id)
  // }

  @Patch(':id')
  @ApiOkResponse({ type: TransactionEntity })
  update(@Param('id') id: string, @Body() dto: Prisma.TransactionCreateInput) {
    return this.transactionService.update(+id, dto)
  }

  @Delete(':id')
  @ApiOkResponse({ type: TransactionEntity })
  remove(@Param('id') id: string) {
    return this.transactionService.remove(+id)
  }
}
