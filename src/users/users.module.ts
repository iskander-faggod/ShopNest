import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users.model";
import { Book } from "../roles/books.model";
import { UserBooks } from "../roles/user-books.model";
import { BooksModule } from "../roles/books.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[
    SequelizeModule.forFeature([User, Book, UserBooks]),
    BooksModule,
  ]
})
export class UsersModule {}
