import { Link } from 'react-router-dom'
import { getViewIdeaRoute } from '../../lib/routes'
import { trpc } from '../../lib/trpc'
import css from './index.module.scss'

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
      <h1 className={css.title}>All Ideas</h1>

      <div className={css.ideas}>
        {data?.ideas.map((idea) => {
          return (
            <div className={css.idea} key={idea.nick}>
              <h2 className={css.ideaName}>
                <Link className={css.ideaLink} to={getViewIdeaRoute({ ideaNick: idea.nick })}>
                  {idea.name}
                </Link>
              </h2>
              <p>{idea.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
