import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehicleDto } from './dtos/create-vehicle.dto';
import { User } from 'src/auth/decorators/current-user.decorator';
import { UserDocument } from 'src/users/models/users.schema';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/role.decorator';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("vehicles")
@Controller('vehicles')
export class VehiclesController {
    constructor(private readonly vehicleService: VehiclesService){}

    @Roles(["serviceProvider"])
    @Post("")
    @UseGuards(AuthGuard("jwt"), RolesGuard)
    createVehicle(@Body() vehicle:VehicleDto , @User() user : Partial<UserDocument>){
        return this.vehicleService.create(vehicle, user._id)
    }
}
