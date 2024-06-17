import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
} from '@nestjs/common';

import { UsersService } from './users.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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

  // As we get string form the params we need to convert it to number . 
  // So we use ParseIntPipe to transform the string to number
  @Get(':id')
  getOneUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getOneUser(id);
  }

  @Post()
  createUser(
    @Body()
    createUserDto: CreateUserDto,
  ) {
    return this.usersService.createUser(createUserDto);
  }

  @Patch(':id')
  updateOneUser(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateOneUser(id, updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id' , ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
}
