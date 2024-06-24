import { Injectable, Logger } from "@nestjs/common";
import { AbstractRepository } from "@app/common/database/abstract.repository";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument } from "./models/users.schema";

@Injectable()
export class UserRepository extends AbstractRepository<UserDocument>{

    constructor(@InjectModel(UserDocument.name) userModel : Model<UserDocument>){
        super(userModel)

    }

}