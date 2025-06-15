import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { HomeModule } from './modules/home/home.module';
import { CourseModule } from './modules/course/course.module';

@Module({
  imports: [UserModule, PrismaModule, HomeModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
