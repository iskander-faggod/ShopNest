import { ApiProperty } from "@nestjs/swagger";

export class ReturnBookDto {
  readonly author: string;
  readonly title: string;
  readonly userId: number;
}