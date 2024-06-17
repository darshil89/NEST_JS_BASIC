import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private data = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 40,
      role: 'MANAGER',
    },
    {
      id: 3,
      name: 'John Smith',
      age: 50,
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'Jane Smith',
      age: 60,
      role: 'ADMIN',
    },
  ];

  getAllUsers() {
    return this.data;
  }

  getAllUsersByFilter(role?: 'INTERN' | 'MANAGER' | 'ADMIN') {
    if (role) {
      const rolesArray =  this.data.filter((user) => user.role === role);

      if(rolesArray.length === 0) throw new NotFoundException(`No user with role ${role}`);

      return rolesArray;
    }
    return this.data;
  }

  getOneUser(id: number) {
    const user = this.data.find((user) => user.id === id);

    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return user;
  }

  createUser(createUserDto: CreateUserDto) {
    const userByHighestId = this.data.reduce((prev, current) =>
      prev.id > current.id ? prev : current,
    );

    const newUser = {
      id: Number(userByHighestId.id) + 1,
      ...createUserDto,
    };

    this.data.push(newUser);

    return newUser;
  }

  updateOneUser(id: number, updateUserDto: UpdateUserDto) {
    this.data = this.data.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });
    return this.getOneUser(id);
  }

  deleteUser(id: number) {
    const removedUser = this.getOneUser(id);
    this.data = this.data.filter((user) => user.id !== id);
    return removedUser;
  }
}

// this lower case userUpdateDto is just a abbreviation
