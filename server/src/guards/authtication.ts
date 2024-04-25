import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { UserService } from '../modules/auth/services/user.service';
import { AuthenticationException } from '../exceptions/authException';
import { AuthService } from 'src/modules/auth/services/auth.service';

@Injectable()
export class Authtication implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new AuthenticationException('请登录');
    }

    try {
      const user = await this.authService.verifyToken(token);
      request.user = user;
      return true;
    } catch (error) {
      throw new AuthenticationException(error?.message || '用户凭证错误');
    }
  }
}
