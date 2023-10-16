import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LibraryMember } from './library-member.entity';
import { CreateLibraryMemberDto, UpdateLibraryMemberDto } from './library-member.dto';

@Injectable()
export class LibraryMemberService {
  constructor(
    @InjectRepository(LibraryMember)
    private libraryMemberRepository: Repository<LibraryMember>,
  ) {}

  async create(createLibraryMemberDto: CreateLibraryMemberDto): Promise<LibraryMember> {
    const libraryMember = this.libraryMemberRepository.create(createLibraryMemberDto);
    return await this.libraryMemberRepository.save(libraryMember);
  }

  async findAll(): Promise<LibraryMember[]> {
    return await this.libraryMemberRepository.find();
  }

  async findOne(id: number): Promise<LibraryMember> {
    return await this.libraryMemberRepository.findOne({ where: { id } });
  }

  async update(id: number, updateLibraryMemberDto: UpdateLibraryMemberDto): Promise<LibraryMember> {
    const existingMember = await this.libraryMemberRepository.findOne({ where: { id } });
    if (!existingMember) {
      throw new Error('Library Member not found');
    }

    this.libraryMemberRepository.merge(existingMember, updateLibraryMemberDto);
    return await this.libraryMemberRepository.save(existingMember);
  }

  async remove(id: number): Promise<void> {
    const libraryMember = await this.libraryMemberRepository.findOne({ where: { id } });
    if (!libraryMember) {
      throw new Error('Library Member not found');
    }
    await this.libraryMemberRepository.remove(libraryMember);
  }
}