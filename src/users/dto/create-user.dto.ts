import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "grinerplaydark@gmail.com", description: "Почта" })
  readonly email: string;
  @ApiProperty({ example: "qwerty", description: "Пароль" })
  readonly password: string;
  @ApiProperty({ example: "Ремарк", description: "Автор первой книги" })
  readonly author: string;
  @ApiProperty({ example: "Три товарища", description: "Первая взятая книга" })
  readonly title: string;
}