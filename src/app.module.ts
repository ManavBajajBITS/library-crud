import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './presentation/modules/author/author.module';
import { BookModule } from './presentation/modules/book/book.module';
import { BorrowedBookModule } from './presentation/modules/borrowed-book/borrowed-book.module';
import { LibraryMemberModule } from './presentation/modules/library-member/library-member.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'library',
      synchronize: true, // Set to false in production
      logging: true, // Set to false in production
      entities: ['dist/domain/**/*.entity{.ts,.js}'],
      migrations: ['dist/migration/*{.ts,.js}'],
      subscribers: ['dist/subscriber/*{.ts,.js}'],
    }),
    AuthorModule,
    BookModule,
    LibraryMemberModule,
    BorrowedBookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
