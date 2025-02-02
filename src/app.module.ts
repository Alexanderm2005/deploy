import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CreaturesModule } from './creatures/creatures.module';
import { OrmModule } from './orm/orm.module';

@Module({
  imports: [PrismaModule, CreaturesModule, OrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
