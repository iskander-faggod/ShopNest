import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/users.model";
import { UserRoles } from "./user-roles.model";

//Generic, to create object of class
interface RoleCreationAttrs {
   title: string;
   author: string;
}

//Schema Description
@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationAttrs> {
  //Describe all params
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example: 'Эрих Мария Ремарк', description: 'ФИО автора'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  author: string;

  @ApiProperty({example: 'Три товарища', description: 'Название книги'})
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({example: 'true', description: 'Книга используется'})
  @Column({ type: DataType.BOOLEAN, allowNull: false })
  is_active: boolean;

  @BelongsToMany(()=>User, ()=>UserRoles)
  users: User[]

}