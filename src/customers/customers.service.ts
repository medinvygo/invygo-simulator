import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignUpDto } from './dtos/signup.dto';
import * as bcrypt from 'bcrypt';
import { CustomerRepository } from './customer.repository';
import { CustomerDocument } from './models/customer.schema';


@Injectable()
export class CustomersService {
    constructor(private readonly userService : UsersService, private readonly customerRepo : CustomerRepository
    ){}

    async createCustomer(userData: SignUpDto | Partial<CustomerDocument>) {
        return this.customerRepo.create({
            ...userData,
            referralCode: "384745",
            pendingAmount: "0"
        })

    }
    async signUp(userData: SignUpDto){
        const user = await this.userService.findUserByEmail(userData.email)
        if(user){
            throw new BadRequestException('User already exists')
        }
        const password = await  bcrypt.hash(userData.password, 10)
        const createdCustomer = await this.createCustomer(userData)
        const newUser = await  this.userService.createUser({
            ...userData,
            role: "customer",
            mobile:"0617672197",
            password: password,
            customerId: createdCustomer._id
        })
        return newUser

    }
    async signUpWithGoogle(userData: {email: string, displayName: string, id:string}){
        const customer = await this.createCustomer({
            full_name : userData.displayName,
            email: userData.email,
            googleId: userData.id
        })
        const user = await this.userService.createUser({
            ...userData,
            customerId: customer._id
        })
        return user

    }
}
