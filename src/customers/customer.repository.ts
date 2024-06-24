import { Injectable } from "@nestjs/common";
import { AbstractRepository } from "@app/common/database/abstract.repository";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CustomerDocument } from "./models/customer.schema";

@Injectable()
export class CustomerRepository extends AbstractRepository<CustomerDocument>{

    constructor(@InjectModel(CustomerDocument.name) userModel : Model<CustomerDocument>){
        super(userModel)

    }

}