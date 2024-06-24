import { Controller, Post, Body, Get, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { GoogleAuthGuard } from './guards/google.guard';
import { User } from './decorators/current-user.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Auth")
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post("/login")
    loginHandler(@Body() userData: LoginDto){
        return this.authService.login(userData)
    }
    @Get("/google/login")
    @UseGuards(GoogleAuthGuard)
    googleLoginHandler(){
        return "Hello"
    }

    @Get("/google/redirect")
    @UseGuards(GoogleAuthGuard)
    googleLoginRedirect(@User() user :any){
        return user
    }
}
