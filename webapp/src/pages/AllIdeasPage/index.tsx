import { Link } from 'react-router-dom'
import { Segment } from '../../components/Segment'
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
    <Segment title="All Ideas">
      <div className={css.ideas}>
        {data?.ideas.map((idea) => {
          return (
            <div className={css.idea} key={idea.nick}>
              <Segment
                size={2}
                title={
                  <Link className={css.ideaLink} to={getViewIdeaRoute({ ideaNick: idea.nick })}>
                    {idea.name}
                  </Link>
                }
                description={idea.description}
              ></Segment>
            </div>
          )
        })}
      </div>
    </Segment>
  )
}
