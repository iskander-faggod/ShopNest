import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book.dto";

@Controller("roles")
export class BooksController  {
  constructor(private roleService: BooksService) {
  }

  @Post()
  create(@Body() dto: CreateBookDto) {
    return this.roleService.createBook(dto);
  }

  @Get("/:value")
  getByValue(@Param("author") author: string, @Param("title") title: string) {
    return this.roleService.getBookByValue(author, title);
  }


}
