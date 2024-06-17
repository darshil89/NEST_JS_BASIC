import { IsString, IsEnum , IsInt , IsNotEmpty} from 'class-validator';

// the id is not there because , this is the schema for creating a new user , the one we are getting from the client
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  age: number;

  @IsEnum(['INTERN', 'MANAGER', 'ADMIN'], {
    message: 'Role must be one of these values: INTERN, MANAGER, ADMIN',
  })
  role: 'INTERN' | 'MANAGER' | 'ADMIN';
}
