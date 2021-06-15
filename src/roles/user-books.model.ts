import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/users.model";
import { Book } from "./books.model";

//Generic, to create object of class


//Schema Description
@Table({ tableName: "user_roles", createdAt: false, updatedAt: false })
export class UserBooks extends Model<UserBooks> {
  //Describe all params
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Book)
  @Column({ type: DataType.INTEGER })
  booksId: number;

  @ForeignKey(() => User)
  @ApiProperty({ example: "Администратор", description: "Описание роли" })
  @Column({ type: DataType.INTEGER })
  userId: number;


}