import { AbstractDocument } from '@app/common/database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({versionKey:false,  collection:"dealers"})
export class DealerDocument extends AbstractDocument{

  @Prop()
  createdBy: string;

}

export const DealerSchema = SchemaFactory.createForClass(DealerDocument);