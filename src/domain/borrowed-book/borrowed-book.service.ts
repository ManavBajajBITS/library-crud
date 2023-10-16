import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BorrowedBook } from './borrowed-book.entity';
import { CreateBorrowedBookDto, UpdateBorrowedBookDto } from './borrowed-book.dto';

@Injectable()
export class BorrowedBookService {
  constructor(
    @InjectRepository(BorrowedBook)
    private borrowedBookRepository: Repository<BorrowedBook>,
  ) {}

  async create(createBorrowedBookDto: CreateBorrowedBookDto): Promise<BorrowedBook> {
    const borrowedBook = this.borrowedBookRepository.create(createBorrowedBookDto);
    return await this.borrowedBookRepository.save(borrowedBook);
  }

  async findAll(): Promise<BorrowedBook[]> {
    return await this.borrowedBookRepository.find();
  }

  async findOne(id: number): Promise<BorrowedBook> {
    return await this.borrowedBookRepository.findOne({ where: { id } });
  }

  async update(id: number, updateBorrowedBookDto: UpdateBorrowedBookDto): Promise<BorrowedBook> {
    const existingBorrowedBook = await this.borrowedBookRepository.findOne({ where: { id } });
    if (!existingBorrowedBook) {
      throw new Error('Borrowed Book not found');
    }

    this.borrowedBookRepository.merge(existingBorrowedBook, updateBorrowedBookDto);
    return await this.borrowedBookRepository.save(existingBorrowedBook);
  }

  async remove(id: number): Promise<void> {
    const borrowedBook = await this.borrowedBookRepository.findOne({ where: { id } });
    if (!borrowedBook) {
      throw new Error('Borrowed Book not found');
    }
    await this.borrowedBookRepository.remove(borrowedBook);
  }
}