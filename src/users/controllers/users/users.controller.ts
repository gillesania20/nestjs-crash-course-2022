import { Controller, Get, Post, Req, Res, Body, Param, Query, UsePipes, ValidationPipe,
    ParseIntPipe, ParseBoolPipe, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from './../../dtos/CreateUser.dto';
import { UsersService } from './../../services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}
    @Get()
    getUsers() {
        return this.userService.fetchUsers();
    }
    @Post('')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto) {
       return this.userService.createUser(userData);
    }
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.userService.fetchUserById(id);
        if(!user){
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }
        return user;
    }
}
