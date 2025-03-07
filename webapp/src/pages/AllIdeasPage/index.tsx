import { Link } from 'react-router-dom'
import { getViewIdeaRoute } from '../../lib/routes'
import { trpc } from '../../lib/trpc'

export const AllIdeasPage = () => {
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
              <h2>
                <Link to={getViewIdeaRoute({ ideaNick: idea.id })}>{idea.name}</Link>
              </h2>
              <p>{idea.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
