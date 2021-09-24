import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) { }

  private readonly columnSelect: any = [
    'id', 'fullname', 'birthday', 'is_active', 'username', 'role', 'created_at'
  ];

  async create(createUserDto: CreateUserDto) {
    let user = this.usersRepository.create(createUserDto);
    if (user) {
      let userData = this.usersRepository.save(user);
      return {
        success : true,
        message : "Create user success!",
        data : {
          user : userData
        }
      }
    }
    return {
      success: false,
      message: "Create user error!"
    }
  }

  findAll() {
    return this.usersRepository.find({ select: this.columnSelect });
  }

  async findOne(id: number) {
    let user = await this.usersRepository.findOne(id, { select: this.columnSelect });
    if (user) return user;
    return {
      success: false,
      message: "User not found!"
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
