import { initTRPC } from '@trpc/server'
const x:number = '1sddsd';
const ideas = [
  {
    id: 'idea-id-1',
    name: 'Idea 1',
    description: 'Description for idea 1...',
  },
  {
    id: 'idea-id-2',
    name: 'Idea 2',
    description: 'Description for idea 2...',
  },
  {
    id: 'idea-id-3',
    name: 'Idea 3',
    description: 'Description for idea 3...',
  },
  {
    id: 'idea-id-4',
    name: 'Idea 4',
    description: 'Description for idea 4...',
  },
  {
    id: 'idea-id-5',
    name: 'Idea 5',
    description: 'Description for idea 5...',
  },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),
})

export type TrpcRouter = typeof trpcRouter
