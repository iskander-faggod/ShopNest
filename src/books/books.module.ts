import { Module } from "@nestjs/common";
import { BooksService } from "./books.service";
import { BooksController } from "./books.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Book } from "./books.model";
import { User } from "../users/users.model";

@Module({
  providers: [BooksService],
  controllers: [BooksController],
  imports: [
    SequelizeModule.forFeature([User, Book])
  ],
  exports: [
    BooksService
  ]
})

export class BooksModule {
}
