import { IsStrongPassword, IsEmail} from "class-validator"

export class LoginDto {
    
    @IsEmail()
    email:string

    @IsStrongPassword()
    password:string
}