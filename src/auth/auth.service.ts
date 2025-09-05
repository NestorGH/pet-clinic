import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async signIn(signInDto: SignInDto): Promise<{ access_token: string }> {
        const { username, password } = signInDto;

        const user = await this.userService.findOneName(username);
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const payload = { sub: user.id, username: user.name };
            // Generate JWT token
            return {
                access_token: await this.jwtService.signAsync(payload),
            };

        } else {
            throw new UnauthorizedException('Invalid credentials');
        }

    }
}
