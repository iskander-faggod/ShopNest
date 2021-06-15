import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users.model";
import { Book } from "../books/books.model";
import { BooksModule } from "../books/books.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[
    SequelizeModule.forFeature([User, Book]),
    BooksModule,
  ],
    exports : [UsersService]
})
export class UsersModule {}
