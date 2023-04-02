import Link from 'next/link'
import groq from 'groq'
import { client } from '../client'

const Index = ({posts}) => {
    return (
      <div>
        <h1>Welcome to a blog!</h1>
        {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link href={`/post/${encodeURIComponent(slug.current)}`}>
                  {title}
                  ({new Date(publishedAt).toDateString()})
                </Link>{' '}
              </li>
            )
        )}
      </div>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `)
    console.log(posts)
    return {
      props: {
        posts
      }
    }
}

export default Index