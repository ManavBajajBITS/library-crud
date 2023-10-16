import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LibraryMember } from "src/domain/library-member/library-member.entity";
import { LibraryMemberService } from "src/domain/library-member/library-member.service";
import { LibraryMemberController } from "src/presentation/controllers/library-member.controller";

@Module({
  imports: [TypeOrmModule.forFeature([LibraryMember])],
  controllers: [LibraryMemberController],
  providers: [LibraryMemberService],
})
export class LibraryMemberModule {}
