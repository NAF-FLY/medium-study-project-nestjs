import { ExpressRequestInterface } from '@app/types/expressRequest.interface';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<ExpressRequestInterface>();

    if (!request.user) {
      return null;
    }

    if (data) {
      return request.user[data as any];
    }

    return request.user;
  },
);
