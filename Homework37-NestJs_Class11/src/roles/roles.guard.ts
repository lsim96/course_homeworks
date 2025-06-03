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

    const [classRole, handlerRole] = this.reflector.getAll(Roles, [
      context.getClass(),
      context.getHandler(),
    ]);

    const decoratorRole = handlerRole || classRole;

    if (!decoratorRole) return true;

    const userRole = request.user.role as RoleType;

    if (userRole !== decoratorRole) return false;

    return true;
  }
}
