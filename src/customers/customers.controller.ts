import { Controller, Post, Body } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { SignUpDto } from './dtos/signup.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Csutomers")
@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService){}

    @Post("/signup")
    signUpHandler(@Body() userData: SignUpDto){
        return this.customersService.signUp(userData)
    }
}
