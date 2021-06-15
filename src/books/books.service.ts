import { Injectable } from "@nestjs/common";
import { Book } from "./books.model";
import { CreateBookDto } from "./dto/create-book.dto";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class BooksService  {

  constructor(@InjectModel(Book) private booksRepository: typeof Book) {
  }

  async createBook(dto: CreateBookDto) {
    return await this.booksRepository.create(dto)
  }

  async getBookByValue(author: string, title: string ) {
    return await this.booksRepository.findOne({ where: { author, title } })
  }
}
