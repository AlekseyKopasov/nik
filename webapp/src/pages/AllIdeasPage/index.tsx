import { trpc } from '../../lib/trpc'

export const AallIdeasPage = () => {
  const { data, error, isFetching, isLoading, isError } = trpc.getIdeas.useQuery()

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <h1>All Ideas</h1>
      <ul>
        {data?.ideas.map((idea) => {
          return (
            <li key={idea.id}>
              <h2>{idea.name}</h2>
              <p>{idea.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
