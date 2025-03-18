import { initTRPC } from '@trpc/server'
import * as trpsExpress from '@trpc/server/adapters/express'
import { type Express } from 'express'
import superjson from 'superjson'
import { type TrpcRouter } from '../router'
import { type AppContext } from './ctx'

export const trpc = initTRPC.context<AppContext>().create({
  transformer: superjson,
})

export const applyTrpcToExpressApp = (expressApp: Express, appContext: AppContext, trpcRouter: TrpcRouter) => {
  expressApp.use(
    '/trpc',
    trpsExpress.createExpressMiddleware({
      router: trpcRouter,
      createContext: () => appContext,
    })
  )
}
