import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
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

  getAllUsers(role?: 'INTERN' | 'MANAGER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  getOneUser(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  createUser(user: {
    name: string;
    age: number;
    role?: 'INTERN' | 'MANAGER' | 'ADMIN';
  }) {
    const userByHighestId = this.users.reduce((prev, current) =>
      prev.id > current.id ? prev : current,
    );

    const newUser = {
      id: String(Number(userByHighestId.id) + 1),
      ...user,
    };

    return newUser;
  }

  updateOneUser(
    id: number,
    userUpdate: {
      name?: string;
      age?: number;
      role?: 'INTERN' | 'MANAGER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...userUpdate };
      }
      return user;
    });
    return this.getOneUser(id);
  }

  deleteUser(id: number) {
    const removedUser = this.getOneUser(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
