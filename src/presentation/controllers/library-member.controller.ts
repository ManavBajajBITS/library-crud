import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LibraryMemberService } from 'src/domain/library-member/library-member.service';
import { CreateLibraryMemberDto, UpdateLibraryMemberDto } from 'src/domain/library-member/library-member.dto';

@Controller('library-members')
export class LibraryMemberController {
  constructor(private readonly libraryMemberService: LibraryMemberService) {}

  @Post()
  create(@Body() createLibraryMemberDto: CreateLibraryMemberDto) {
    return this.libraryMemberService.create(createLibraryMemberDto);
  }

  @Get()
  findAll() {
    return this.libraryMemberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.libraryMemberService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLibraryMemberDto: UpdateLibraryMemberDto) {
    return this.libraryMemberService.update(+id, updateLibraryMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.libraryMemberService.remove(+id);
  }
}