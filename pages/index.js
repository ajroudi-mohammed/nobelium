import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'
import Jambotron from '@/components/Jambotron'

export async function getStaticProps () {
  const favouritePosts = await getAllPosts({ includePages: false, home: 'favourites' })
  const podcastPosts = await getAllPosts({ includePages: false, home: 'podcasts' })
  return {
    props: {
      favouritePosts,
      podcastPosts
    },
    revalidate: 1
  }
}

const index = ({ favouritePosts, podcastPosts }) => {
  const favouriteTitle = favouritePosts.length > 0 ? <h2 className='text-4xl font-bold mb-3'>Favorite Posts</h2> : ''
  const podcastTitle = podcastPosts.length > 0 ? <h2 className='text-4xl font-bold mb-3'>Favorite Podcasts</h2> : ''
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      <Jambotron />
      {favouriteTitle}
      {favouritePosts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
      {podcastTitle}
      {podcastPosts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
      <h2 className='text-4xl font-bold mt-8 mb-3'>Elsewhere</h2>
      <ul>
          <li><a href="https://www.linkedin.com/in/mohammed-ajroudi/">Linkedin</a></li>
          <li><a href="https://github.com/ajroudi-mohammed">GitHub</a></li>
      </ul>
      <h2 className='text-4xl font-bold mt-8 mb-3'>Colophon</h2>
      <p>
      This site is built using NextJS and deployed using Vercel. I used tailwind for CSS and for the backend I use my favourite note taking app Notion.
      </p>

    </Container>
  )
}

export default index
