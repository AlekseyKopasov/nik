import { TrpcProvider } from './lib/trpc'
import { AallIdeasPage } from './pages/AllIdeasPage'

export const App = () => {
  return (
    <TrpcProvider>
      <AallIdeasPage />
    </TrpcProvider>
  )
}