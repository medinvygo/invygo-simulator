import { AbstractDocument } from '@app/common/database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import  { Types } from 'mongoose';

@Schema({versionKey:false, collection:"vehicles"})
export class VehicleDocument extends AbstractDocument{

  @Prop({required: true})
  name: string;

  @Prop({unique: true})
  serviceProviderId: Types.ObjectId;

  @Exclude()
  @Prop({required: false})
  model: string;

  @Prop({required: true})
  year: number;

  @Prop({default: false})
  isDeleted: Boolean

}

export const VehicleSchema = SchemaFactory.createForClass(VehicleDocument);
