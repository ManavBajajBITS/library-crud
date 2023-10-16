import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BorrowedBook } from '../borrowed-book/borrowed-book.entity';

@Entity()
export class LibraryMember {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => BorrowedBook, (borrowedBook) => borrowedBook.libraryMember)
  borrowedBooks: BorrowedBook[];
}