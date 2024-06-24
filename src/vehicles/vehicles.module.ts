import { Module } from '@nestjs/common';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';
import { VehicleRepository } from './vehicle.repository';
import { VehicleDocument, VehicleSchema } from './models/vehicle.schema';
import { DatabaseModule } from '@app/common/database/database.module';
@Module({
  imports: [DatabaseModule.forFeature([{name: VehicleDocument.name , schema : VehicleSchema}])],
  controllers: [VehiclesController],
  providers: [VehiclesService, VehicleRepository]
})
export class VehiclesModule {}
