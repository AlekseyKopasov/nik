import { trpc } from '../../lib/trpc'

export const AallIdeasPage = () => {
  const result = trpc.getIdeas.useQuery()

  return (
    <div>
      <h1>Ideas page</h1>
      <ul>
        {ideas.map((idea) => {
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