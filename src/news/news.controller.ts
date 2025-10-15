import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Get()
  async getNews() {
    return await this.newsService.getDataNEws();
  }

  @Get(':id')
  async getNewsid(@Param('id', ParseIntPipe) id: number | number) {
    console.log(id, `caks`);
    return await this.newsService.getDataNewsId(+id);
  }
}
