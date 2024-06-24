import {IsString, IsEmail, IsStrongPassword} from "class-validator"

export class UserDto {
    @IsString()
    full_name: string;
  
    @IsEmail()
    email: string;
  
    @IsStrongPassword()
    password: string;
  
    @IsString()
    mobile: string;
}