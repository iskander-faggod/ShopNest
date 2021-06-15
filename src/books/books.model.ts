import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/users.model";

//Generic, to create object of class
interface BooksCreationAttrs {
  title: string;
  author: string;
}

//Schema Description
@Table({ tableName: "books" })
export class Book extends Model<Book, BooksCreationAttrs> {
  //Describe all params
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "Эрих Мария Ремарк", description: "ФИО автора" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  author: string;

  @ApiProperty({ example: "Три товарища", description: "Название книги" })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({ example: "true", description: "Книга используется" })
  @Column({ type: DataType.BOOLEAN, allowNull: false })
  is_active: boolean;

  @BelongsTo(() => User)
  user: User;

  @Column({ type: DataType.INTEGER})
  @ForeignKey(()=>User)
  userId : number;

}