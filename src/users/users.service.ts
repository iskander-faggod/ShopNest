import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";
import { EditUserDto } from "./dto/edit-user.dto";
import { RemoveUserDto } from "./dto/remove-user.dto";


@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User,
              private roleService: RolesService) {
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    // const role = await this.roleService.getRoleByValue('USER')
    // await user.$set('roles', [role.id])
    return user;
  }

  async editUser(dto: EditUserDto) {
  }

  async removeUser(dto: RemoveUserDto) {
  }

  async getAllUsers() {
    return await this.userRepository.findAll({ include: { all: true } });
  }

  async getUser(id: number) {
    return await this.userRepository.findByPk(id);
  }

  async returnBook(author:string, title:string){
    const book = await this.roleService.getRoleByValue(author, title);



  }
}
