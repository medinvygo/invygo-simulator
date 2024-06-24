import { createParamDecorator, ExecutionContext } from '@nestjs/common';

const getCurrentUser = (context : ExecutionContext) => {
    return context.switchToHttp().getRequest().user;
}
export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => getCurrentUser(ctx)
);