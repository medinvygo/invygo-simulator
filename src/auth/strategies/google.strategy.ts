import {  Strategy, Profile } from 'passport-google-oauth20';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { CustomersService } from 'src/customers/customers.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor(configService : ConfigService, private userService : UsersService, private readonly customerService : CustomersService) {
    super({
        clientID: configService.get<string>('GOOGLE_CLIENT_ID'),
        clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET'),
        callbackURL: 'http://localhost:3002/auth/google/redirect',
        scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string , refreshToken: string, profile : Profile) {
    const user = await this.userService.findUserByEmail(profile.emails[0].value)
    if(!user){
        const newUser = await this.customerService.signUpWithGoogle({
          email:profile.emails[0].value, 
          id: profile.id, 
          displayName:profile.displayName
        })
        return newUser
    }
    return user
  }
}