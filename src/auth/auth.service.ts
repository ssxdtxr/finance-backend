import { Injectable } from '@nestjs/common'
import { DbService } from 'src/db/db.service'

@Injectable()
export class AuthService {
  constructor(private prisma: DbService) {}

  async register(dto: any) {
    return
  }
}
