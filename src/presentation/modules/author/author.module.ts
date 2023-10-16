import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Author } from "src/domain/author/author.entity";
import { AuthorService } from "src/domain/author/author.service";
import { AuthorController } from "src/presentation/controllers/author.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
