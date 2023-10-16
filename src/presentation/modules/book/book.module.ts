import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Book } from "src/domain/book/book.entity";
import { BookService } from "src/domain/book/book.service";
import { BookController } from "src/presentation/controllers/book.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
