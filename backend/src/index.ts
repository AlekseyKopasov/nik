import cors from 'cors'
import express from 'express'
import { type AppContext, createAppContext } from './lib/ctx'
import { env } from './lib/env'
import { applyPassportToExpresApp } from './lib/passport'
import { applyTrpcToExpressApp } from './lib/trpc'
import { trpcRouter } from './router'

let ctx: AppContext | null = null

void (async () => {
  try {
    ctx = createAppContext()

    const expressApp = express()
    expressApp.use(cors())

    expressApp.get('/ping', (req, res) => {
      res.send('pong')
    })

    applyPassportToExpresApp(expressApp, ctx)
    await applyTrpcToExpressApp(expressApp, ctx, trpcRouter)

    expressApp.listen(env.PORT, () => {
      console.info(`Listening at http://localhost:${env.PORT}`)
    })
  } catch (error) {
    console.error(error)

    await ctx?.stop()
  }
})()
