import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "grinerplaydark@gmail.com", description: "Почта" })
  readonly email: string;
  @ApiProperty({ example: "qwerty", description: "Пароль" })
  readonly password: string;
  // @ApiProperty({ example: "true", description: "С картой библиотеки" })
  // with_card: boolean;
  // @ApiProperty({ example: "Ремарк: Три товарища", description: "Активная книга" })
  // active_book: string;

}