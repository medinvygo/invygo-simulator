import { AbstractDocument } from '@app/common/database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({versionKey:false , collection:"customers"})
export class CustomerDocument extends AbstractDocument{

  @Prop({default:0})
  walletBalance: number;

  @Prop({default:0})
  bookingCount: number;

  @Prop()
  referralCode: string;

  @Prop()
  pendingAmount: string;

  @Prop()
  googleId : string

}

export const CustomerSchema = SchemaFactory.createForClass(CustomerDocument);