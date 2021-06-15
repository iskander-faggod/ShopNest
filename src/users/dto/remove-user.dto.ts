import { ApiProperty } from "@nestjs/swagger";

export class RemoveUserDto {
  @ApiProperty({ example: "grinerplaydark@gmail.com", description: "Почта" })
  readonly email: string;
  @ApiProperty({ example: "qwerty", description: "Пароль" })
  readonly password: string;
}