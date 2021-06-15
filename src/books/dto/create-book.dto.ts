import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
  readonly title: string;
  readonly author: string;
}