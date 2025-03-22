import { trpc } from '../../lib/trpc'
import { getPasswordHash } from '../../utils/getPasswordHash'
import { zSignUpTrpcInput } from '../signUp/input'

export const signInTrpcRoute = trpc.procedure.input(zSignUpTrpcInput).mutation(async ({ ctx, input }) => {
  const user = await ctx.prisma.user.findFirst({
    where: {
      nick: input.nick,
      password: getPasswordHash(input.password),
    },
  })

  if (!user) {
    throw new Error('Invalid nick or password')
  }
  return true
})
