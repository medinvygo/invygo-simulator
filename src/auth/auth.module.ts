import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { GoogleStrategy } from './strategies/google.strategy';
import { CustomersModule } from 'src/customers/customers.module';

@Module({
  imports:[UsersModule,CustomersModule ,  JwtModule.registerAsync({
    imports:[ConfigModule],
    useFactory: (configService : ConfigService) => ({
      secret: configService.get("JWT_SECRET"),
    }),
    inject: [ConfigService],
  })],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, GoogleStrategy]
})
export class AuthModule {}
