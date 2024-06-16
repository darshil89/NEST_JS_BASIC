import { Injectable } from '@nestjs/common';

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
      return this.data.filter((user) => user.role === role);
    }
    return this.data;
  }

  getOneUser(id: number) {
    const user = this.data.find((user) => user.id === id);
    return user;
  }

  createUser(user: {
    name: string;
    age: number;
    role: 'INTERN' | 'MANAGER' | 'ADMIN';
  }) {
    const userByHighestId = this.data.reduce((prev, current) =>
      prev.id > current.id ? prev : current,
    );

    const newUser = {
      id: (Number(userByHighestId.id) + 1),
      ...user,
    };

    this.data.push(newUser);

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
    this.data = this.data.map((user) => {
      if (user.id === id) {
        return { ...user, ...userUpdate };
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
