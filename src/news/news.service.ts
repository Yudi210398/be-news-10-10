import { Injectable } from '@nestjs/common';
import { PrismaPostgreService } from 'src/prisma-postgre/prisma-postgre.service';

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaPostgreService) {}

  async getDataNEws() {
    return await this.prisma.news.findMany();
  }
}
