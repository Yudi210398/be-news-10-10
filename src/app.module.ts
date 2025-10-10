import { Module } from '@nestjs/common';
import { NewsModule } from './news/news.module';
import { PrismaPostgreService } from './prisma-postgre/prisma-postgre.service';

@Module({
  imports: [NewsModule],
  controllers: [],
  providers: [PrismaPostgreService],
})
export class AppModule {}
