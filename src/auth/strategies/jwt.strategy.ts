import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(configService : ConfigService, private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:configService.get("JWT_SECRET"),
    });
  }

  async validate(payload: any) {
    try{
        const user = await this.userService.findUserById(payload.id);
        if(!user){
            throw new UnauthorizedException()
        }
        return user;
    }catch(err){
        throw new UnauthorizedException(err)
    }
  }
}