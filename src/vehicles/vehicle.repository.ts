import { Injectable, Logger } from "@nestjs/common";
import { AbstractRepository } from "@app/common/database/abstract.repository";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { VehicleDocument } from "./models/vehicle.schema";
@Injectable()
export class VehicleRepository extends AbstractRepository<VehicleDocument>{

    constructor(@InjectModel(VehicleDocument.name) userModel : Model<VehicleDocument>){
        super(userModel)

    }

}