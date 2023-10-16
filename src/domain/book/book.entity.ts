import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Author } from '../author/author.entity';

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
  borrowedBooks: any;
}