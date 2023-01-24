import { previewData } from "next/headers"
import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"
import PreviewSuspense from '../../components/PreviewSuspense'
import PreviewBlogList from "../../components/PreviewBlogList"
import BlogList from "../../components/BlogList"
import Banner from "../../components/Banner"
import { unstable_getServerSession } from "next-auth/next"
import Header from "../../components/Header"

const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`
export const revalidate = 60 //re-builds page every 60 in background


async function HomePage() {
  const session = await unstable_getServerSession()
  
  if (previewData()) {
    return (
      <PreviewSuspense fallback={(
        <div role="status">
          <p>
            Loading Preview Data
          </p>
        </div>
      )}>
        <PreviewBlogList query={query}/>
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query)
  
  return (
      <div>
      <Header session={session}/>
      <Banner />
      <BlogList posts={posts}/>
      </div>
  )
}

export default HomePage