import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  readonly title: string;
  readonly author: string;
}