import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get() // GET /users or GET /users/?role=value&name=value
  getAllUsersByFilter(@Query('role') role?: 'INTERN' | 'MANAGER' | 'ADMIN') {
    return this.usersService.getAllUsersByFilter(role);
  }

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getOneUser(@Param('id') id: string) {
    return this.usersService.getOneUser(+id);
  }

  @Post()
  createUser(
    @Body()
    user: {
      name: string;
      age: number;
      role: 'INTERN' | 'MANAGER' | 'ADMIN';
    },
  ) {
    return this.usersService.createUser(user);
  }

  @Patch(':id')
  updateOneUser(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name?: string;
      age?: number;
      role?: 'INTERN' | 'MANAGER' | 'ADMIN';
    },
  ) {
    return this.usersService.updateOneUser(+id, userUpdate);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  }
}
