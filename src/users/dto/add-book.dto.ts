import { ApiProperty } from "@nestjs/swagger";

export class AddBookDto {
  readonly author: string;
  readonly title: string;
  readonly userId: number;
}