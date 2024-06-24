import { Injectable } from '@nestjs/common';
import { VehicleRepository } from './vehicle.repository';
import { VehicleDto } from './dtos/create-vehicle.dto';
import { Types } from 'mongoose';
@Injectable()
export class VehiclesService {

    constructor(private readonly vehicleRepo: VehicleRepository){}

    async create(vehicleData : VehicleDto, userId : Types.ObjectId){
      return this.vehicleRepo.create({
        ...vehicleData,
        serviceProviderId : userId
      })
    }

    
}
