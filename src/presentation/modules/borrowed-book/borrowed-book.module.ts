import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BorrowedBook } from "src/domain/borrowed-book/borrowed-book.entity";
import { BorrowedBookService } from "src/domain/borrowed-book/borrowed-book.service";
import { BorrowedBookController } from "src/presentation/controllers/borrowed-book.controller";

@Module({
  imports: [TypeOrmModule.forFeature([BorrowedBook])],
  controllers: [BorrowedBookController],
  providers: [BorrowedBookService],
})
export class BorrowedBookModule {}
