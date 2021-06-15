import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/users.model";
import { Role } from "./roles.model";

//Generic, to create object of class


//Schema Description
@Table({ tableName: "user_roles", createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  //Describe all params
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  rolesId: number;

  @ForeignKey(() => User)
  @ApiProperty({ example: "Администратор", description: "Описание роли" })
  @Column({ type: DataType.INTEGER })
  userId: number;


}