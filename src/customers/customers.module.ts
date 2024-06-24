import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { CustomerRepository } from './customer.repository';
import { DatabaseModule } from '@app/common/database/database.module';
import { CustomerDocument, CustomerSchema } from './models/customer.schema';
import { UsersModule } from 'src/users/users.module';
@Module({
  imports: [UsersModule, DatabaseModule.forFeature([{name: CustomerDocument.name , schema : CustomerSchema}])],
  controllers: [CustomersController],
  providers: [CustomersService, CustomerRepository],
  exports:[CustomersService]
})
export class CustomersModule {}
