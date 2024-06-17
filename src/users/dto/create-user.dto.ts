
// the id is not there because , this is the schema for creating a new user , the one we are getting from the client
export class CreateUserDto {
    name: string;
    age: number;
    role: 'INTERN' | 'MANAGER' | 'ADMIN';
}


