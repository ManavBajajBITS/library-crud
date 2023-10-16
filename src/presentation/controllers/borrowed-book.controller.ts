import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BorrowedBookService } from '../../domain/borrowed-book/borrowed-book.service';
import { CreateBorrowedBookDto, UpdateBorrowedBookDto } from '../../domain/borrowed-book/borrowed-book.dto';

@Controller('borrowed-books')
export class BorrowedBookController {
  constructor(private readonly borrowedBookService: BorrowedBookService) {}

  @Post()
  create(@Body() createBorrowedBookDto: CreateBorrowedBookDto) {
    return this.borrowedBookService.create(createBorrowedBookDto);
  }

  @Get()
  findAll() {
    return this.borrowedBookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.borrowedBookService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBorrowedBookDto: UpdateBorrowedBookDto) {
    return this.borrowedBookService.update(+id, updateBorrowedBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.borrowedBookService.remove(+id);
  }
}