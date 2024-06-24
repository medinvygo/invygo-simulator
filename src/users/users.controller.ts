import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/decorators/current-user.decorator';
import { UserDocument } from './models/users.schema';
import { Roles } from 'src/auth/decorators/role.decorator';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Users")
@Controller('users')
export class UsersController {

    constructor(){}

    @Roles(['admin', "customer", "serviceProvider"])
    @Get("me")
    @UseGuards(AuthGuard("jwt"), RolesGuard)
    getCurrentUser(@User() user : Omit<UserDocument, "password">){
        return user
    }
}
