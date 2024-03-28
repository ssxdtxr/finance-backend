import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { Prisma, PrismaClient, Transaction } from '@prisma/client'
import { DbService } from 'src/db/db.service'

@Injectable()
export class TransactionService {
  constructor(private readonly db: DbService) {}

  async getTransactionById(id: number): Promise<Transaction> {
    const transaction = await this.db.transaction.findUnique({
      where: { id },
    })

    if (!transaction) throw new BadRequestException('Транзакции не существует')

    return transaction
  }

  async create(dto: Prisma.TransactionCreateInput) {
    return await this.db.transaction.create({
      data: dto,
    })
  }

  async findAll(page: number | null, limit: number | null) {
    if (page && limit) {
      const offset = (page - 1) * limit

      const totalCount = await this.db.transaction.count()
      const totalPages = Math.ceil(totalCount / limit)
      const transactions = await this.db.transaction.findMany({
        orderBy: { id: 'asc' },
        skip: offset,
        take: +limit,
      })

      return {
        transactions,
        totalPages,
      }
    }
    return await this.db.transaction.findMany({
      orderBy: { id: 'asc' },
    })
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} transaction`
  // }

  async update(id: number, dto: Prisma.TransactionCreateInput) {
    const transaction = await this.getTransactionById(id)

    return await this.db.transaction.update({
      where: { id: transaction.id },
      data: dto,
    })
  }

  async remove(id: number) {
    const transaction = await this.getTransactionById(id)

    await this.db.transaction.delete({
      where: { id: transaction.id },
    })
    return { message: 'Транзакция успешно удалена' }
  }
}
