import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { UserDto } from './dtos/user.dto';
import { UserDocument } from './models/users.schema';


@Injectable()
export class UsersService {

    constructor(private readonly userRepo: UserRepository){}

    findUserById(_id:string) {
        return this.userRepo.findOne({_id})
    }
    findUserByEmail(email:string){
        return this.userRepo.findOne({email})
    }
    createUser(userData: Partial<UserDocument>){
        return this.userRepo.create(userData)
    }
}
