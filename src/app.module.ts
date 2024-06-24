import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from '@app/common/database/database.module';
import { CustomersModule } from './customers/customers.module';
import { DealersModule } from './dealers/dealers.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { PaymentsModule } from './payments/payments.module';
import { BookingsModule } from './bookings/bookings.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [LoggerModule.forRoot(), ConfigModule.forRoot({isGlobal:true}), UsersModule , DatabaseModule, CustomersModule, DealersModule, AuthModule, AdminModule, PaymentsModule, BookingsModule, VehiclesModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
