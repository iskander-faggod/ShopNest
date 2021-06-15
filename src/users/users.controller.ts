import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";
import { EditUserDto } from "./dto/edit-user.dto";
import { RemoveUserDto } from "./dto/remove-user.dto";
import { AddBookDto } from "./dto/add-book.dto";

@ApiTags('Пользователи')
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @ApiOperation({ summary: "Создание пользователя" })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: "Редактировать пользователя" })
  @ApiResponse({ status: 200, type: User })
  @Post('/edit')
  edit(@Body() userDto: EditUserDto)  {
    return this.usersService.editUser(userDto);
  }

  @ApiOperation({ summary: "Удаление пользователя из системы" })
  @ApiResponse({ status: 200, type: User })
  @Delete('/delete')
  delete(@Body() userDto: RemoveUserDto)  {
    return this.usersService.removeUser(userDto);
  }

  @ApiOperation({ summary: "Получение информации о всех пользователях" })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: "Получение информации об одном пользователе" })
  @ApiResponse({ status: 200, type: [User] })
  @Get(':/id')
  getUser(@Param("author") id: number) {
    return this.usersService.getUser(id);
  }

  @ApiOperation({ summary: "Добавление книги в карту пользователя" })
  @ApiResponse({ status: 200, type: [User] })
  @Get('/book')
  addBook(@Body() userDto: AddBookDto) {
    return this.usersService.addBook(userDto);
  }
}
