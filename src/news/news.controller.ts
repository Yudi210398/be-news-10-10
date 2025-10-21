import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Get()
  async getNews() {
    return await this.newsService.getDataNEws();
  }

  @Get('year')
  async getNewsortYear() {
    return await this.newsService.getDataYear();
  }

  @Get('data')
  async getNewsortYearSort() {
    return await this.newsService.getDataYearAll();
  }

  @Get(':id')
  async getNewsid(@Param('id', ParseIntPipe) id: number | number) {
    console.log(id, `caks`);
    return await this.newsService.getDataNewsId(+id);
  }
}
