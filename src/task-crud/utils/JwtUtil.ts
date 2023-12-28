import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class JwtUtil {
    constructor(private readonly jwtService: JwtService) {}

    decode(auth: string): {user: User}{
        const jwt = auth.replace('Bearer ', '');
        return this.jwtService.decode(jwt, { json: true }) as { user: User };
    }
}