import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaPostgreService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect().then(async () => {});
    console.log(`konek database`);
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on(`warn`, async () => {
      await app.close();
    });
  }
}
