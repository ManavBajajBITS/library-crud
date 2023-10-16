import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Author } from '../author/author.entity';
import { BorrowedBook } from '../borrowed-book/borrowed-book.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  ISBN: string;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;

  @ManyToOne(() => BorrowedBook, (borrowedBook) => borrowedBook.book)
  borrowedBooks: any;
}