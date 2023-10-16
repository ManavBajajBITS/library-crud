import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = this.authorRepository.create(createAuthorDto);
    return await this.authorRepository.save(author);
  }

  async findAll(): Promise<Author[]> {
    return await this.authorRepository.find();
  }

  async findOne(id: number): Promise<Author> {
    return await this.authorRepository.findOne({ where: { id } });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    const existingAuthor = await this.authorRepository.findOne({ where: { id } });
    if (!existingAuthor) {
      throw new Error('Author not found');
    }

    this.authorRepository.merge(existingAuthor, updateAuthorDto);
    return await this.authorRepository.save(existingAuthor);
  }

  async remove(id: number): Promise<void> {
    const author = await this.authorRepository.findOne({ where: { id } });
    if (!author) {
      throw new Error('Author not found');
    }
    await this.authorRepository.remove(author);
  }
}
