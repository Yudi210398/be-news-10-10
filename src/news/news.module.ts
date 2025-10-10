import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { PrismaPostgreService } from 'src/prisma-postgre/prisma-postgre.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService, PrismaPostgreService],
})
export class NewsModule {}
