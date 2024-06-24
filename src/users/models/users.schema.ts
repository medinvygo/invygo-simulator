import { AbstractDocument } from '@app/common/database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import mongoose, { Types } from 'mongoose';

@Schema({versionKey:false, collection:"users"})
export class UserDocument extends AbstractDocument{

  @Prop({required: true})
  full_name: string;

  @Prop({unique: true})
  email: string;

  @Exclude()
  @Prop({required: false})
  password: string;

  @Prop({required: true})
  mobile: string;

  @Prop({default: false})
  isPhoneVerified: Boolean;

  @Prop({default: false})
  isEmailVerified: Boolean;

  @Prop({default: false})
  isDeleted: Boolean

  @Prop()
  customerId: Types.ObjectId

  @Prop({required: true})
  role: string

  @Prop()
  dealerId: Types.ObjectId

  @Prop({default: false})
  isBlocked: Boolean

  @Prop()
  passwordResetToken: string

}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
