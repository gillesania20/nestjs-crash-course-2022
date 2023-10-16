import { Injectable } from '@nestjs/common';
import { CreateUserType } from './../../../utils/types';

@Injectable()
export class UsersService {
    private fakeUsers = [{username: 'Lorenz', email: 'test'}];
    fetchUsers() {
        return this.fakeUsers;
    }
    createUser(userDetails: CreateUserType) {
        this.fakeUsers.push(userDetails);
        return null;
    }
    fetchUserById(id: number) {
        //return { id, username: 'test', email: 'test'};
        return null;
    }
}
