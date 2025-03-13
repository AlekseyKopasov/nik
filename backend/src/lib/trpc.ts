import { initTRPC } from '@trpc/server'
import * as trpsExpress from '@trpc/server/adapters/express'
import { type Express } from 'express'
import { type TrpcRouter } from '../router'

export const trpc = initTRPC.create()

export const applyTrpcToExpressApp = (expressApp: Express, trpcRouter: TrpcRouter) => {
  expressApp.use(
    '/trpc',
    trpsExpress.createExpressMiddleware({
      router: trpcRouter,
    })
  )
}
