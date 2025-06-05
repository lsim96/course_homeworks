import { CanActivate, Injectable, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { RoleType } from './roles.model';
import { Roles } from './roles.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const decoratorRoles = this.reflector.getAllAndOverride<RoleType[]>(Roles, [
      context.getClass(),
      context.getHandler(),
    ]);

    if (!decoratorRoles) return true;

    const userRoles = request.user.role as RoleType[];

    console.log('user roles', userRoles);
    console.log('decorator roles', decoratorRoles);

    const hasAccess = userRoles.some((role) => decoratorRoles.includes(role));

    return hasAccess;
  }
}
