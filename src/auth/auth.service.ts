import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt"
import { AccessTokenType } from './types';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly jwtService : JwtService){}

    generateToken(payload : AccessTokenType){
        return this.jwtService.sign(payload)
    }

    async login(userData: LoginDto){
        const user = await this.userService.findUserByEmail(userData.email)
        if(!user){
            throw new UnauthorizedException("Invalid Credentiels")
        }
        const isPasswordValid = await bcrypt.compare(userData.password, user.password)
        if(!isPasswordValid){
            throw new BadRequestException("Invalid Credentiels")
        }
        const payload = {
            id : user._id,
            email : user.email,
            name : user.full_name,
            role : user.role
        }
        const token = this.generateToken(payload)
        const {password , ...data} = user;
        return {
           user :data,
            token
        }
         

    }

}
