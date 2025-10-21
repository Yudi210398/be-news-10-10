import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaPostgreService } from 'src/prisma-postgre/prisma-postgre.service';

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaPostgreService) {}

  async getDataNEws() {
    return await this.prisma.news.findMany();
  }

  async getDataNewsId(id: number) {
    const datas = await this.prisma.news.findMany({ where: { id: id } });
    if (datas.length === 0)
      throw new HttpException('Data Tidak Ada', HttpStatus.CONFLICT);
    return datas;
  }

  async getDataYear() {
    const hasilDate = await this.prisma.news.findMany({
      select: { date: true },
    });

    const loops = hasilDate.map((result) => {
      const breakss = result.date.toString().split(' ');
      return breakss[3];
    });
    const unik = [...new Set(loops)];

    const sort = unik.sort((a, b) => +b - +a);

    return sort;
  }

  async getDataYearAll() {
    const getAll = await this.prisma.news.findMany();

    const filter = getAll.filter(
      (item) => new Date(item.date).getFullYear() === 2024,
    );

    return filter;
  }
}
