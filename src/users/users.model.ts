import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";

//Generic, to create object of class
interface UserCreationAttrs {
  email: string;
  password: string;
}

//Schema Description
@Table({ tableName: "users" }) //to do Table with name 'users'
export class User extends Model<User, UserCreationAttrs> {
  //Describe all params
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example: 'grinerplaydark@gmail.com', description: 'Почта'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({example: 'qwerty', description: 'Пароль'})
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({example: 'true', description: 'Есть ли карта в библиотеке'})
  @Column({ type: DataType.BOOLEAN,  allowNull: false })
  with_card: boolean;

  @BelongsToMany(()=>Role, ()=>UserRoles)
  roles: Role[]

}