import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Book } from '../book/book.entity';
import { LibraryMember } from '../library-member/library-member.entity';

@Entity()
export class BorrowedBook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  borrowDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  returnDate: Date;

  @ManyToOne(() => Book, (book) => book.borrowedBooks)
  book: Book;

  @ManyToOne(() => LibraryMember, (libraryMember) => libraryMember.borrowedBooks)
  libraryMember: LibraryMember;
}