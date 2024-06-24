import { IsString, IsStrongPassword } from "class-validator";

export class SignUpDto {

    @IsString()
    full_name:string

    @IsString()
    email:string

    @IsStrongPassword()
    password:string
}