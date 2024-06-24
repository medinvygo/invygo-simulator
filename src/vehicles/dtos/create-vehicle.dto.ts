import { IsString } from "class-validator";

export class VehicleDto {
    @IsString()
    name:string
    @IsString()
    model:string
    @IsString()
    year:number

}