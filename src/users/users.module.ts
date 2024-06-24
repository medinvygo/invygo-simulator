import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserRepository } from './users.repository';
import { DatabaseModule } from '@app/common/database/database.module';
import { UserDocument } from './models/users.schema';
import { UserSchema } from './models/users.schema';
@Module({
  imports: [DatabaseModule.forFeature([{name: UserDocument.name , schema : UserSchema}])],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
  exports: [UsersService]
})
export class UsersModule {}
