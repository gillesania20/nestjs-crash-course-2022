import { Controller, Get, Post, Req, Res, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from './../../dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return [{ username: 'Lorenz', email: 'lorenz@lorenz.com' }];
    }
    @Post('')
    createUser(@Body() userData: CreateUserDto) {
        console.log(userData);
        return {};
    }
}
