import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { BooksService } from "../books/books.service";
import { EditUserDto } from "./dto/edit-user.dto";
import { RemoveUserDto } from "./dto/remove-user.dto";
import { AddBookDto } from "./dto/add-book.dto";
import { ReturnBookDto } from "./dto/return-book.dto";


@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User,
              private bookService: BooksService) {
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const book = await this.bookService.getBookByValue("Эрих Мария Ремарк", "Три товарища");
    await user.$set("books", [book.id]);
    user.books = [book];
    return user;
  }

  async editUser(dto: EditUserDto) {
  }

  async removeUser(dto: RemoveUserDto) {
  }

  async getAllUsers() {
    return await this.userRepository.findAll({ include: { all: true } });
  }

  async getUser(id: number) {
    return await this.userRepository.findByPk(id);
  }

  async addBook(dto: AddBookDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const book = await this.bookService.getBookByValue(dto.author, dto.title);
    if (user && book) {
      await user.$add("books", book);
      return dto;
    }
    throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
  }


  async returnBook(dto: ReturnBookDto) {
    const book = await this.bookService.getBookByValue(dto.author, dto.title);
    const user = await this.userRepository.findByPk(dto.userId)
    if (book && user){
      // this.userRepository.find()
    }

  }

}
