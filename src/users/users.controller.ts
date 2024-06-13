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

@Controller('users')
export class UsersController {
  /* 
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

  @Get() // GET /users or GET /users/?role=value&name=value
  getAllUsers(@Query('role') role?: 'INTERN' | 'MANAGER' | 'ADMIN', @Query('name') name?: string) {
    return {  role, name };
  }

  @Get('interns')
  getIntern() {
    return 'This action returns all interns';
  }

  @Get(':id')
  getOneUser(@Param('id') id: string) {
    return { id: id };
  }

  @Post()
  createUser(@Body() user: { name: string; age: number }) {
    return user;
  }

  @Patch(':id')
  updateOneUser(
    @Param('id') id: string,
    @Body() userUpdate: { name: string; age: number },
  ) {
    return { id: id, ...userUpdate };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return { id: id };
  }
}
