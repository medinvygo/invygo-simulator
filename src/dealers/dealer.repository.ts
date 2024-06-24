import { AbstractRepository } from "@app/common/database/abstract.repository";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DealerDocument } from "./models/dealer.schema";

@Injectable()
export class CustomerRepository extends AbstractRepository<DealerDocument>{

    constructor(@InjectModel(DealerDocument.name) userModel : Model<DealerDocument>){
        super(userModel)

    }

}