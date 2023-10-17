import { Controller, Get, Post, Req, Res, Body, Param, Query, UsePipes, ValidationPipe,
    ParseIntPipe, ParseBoolPipe, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from './../../dtos/CreateUser.dto';
import { UsersService } from './../../services/users/users.service';
import { ValidateCreateUserPipe } from './../../pipes/validate-create-user/validate-create-user.pipe';
import { AuthGuard } from './../../guards/auth/auth.guard';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}
    @Get()
    @UseGuards(AuthGuard)
    getUsers() {
        return this.userService.fetchUsers();
    }
    @Post('')
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
        console.log(userData.age.toPrecision());
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
