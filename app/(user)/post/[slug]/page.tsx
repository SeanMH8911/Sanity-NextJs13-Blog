import { groq } from "next-sanity"
import Image from "next/image"
import {PortableText} from '@portabletext/react'
import { client } from "../../../../lib/sanity.client"
import urlFor from "../../../../lib/urlFor"
import { RichTextComponents } from "../../../../components/RichTextComponents"
import Comment from "../../../../components/comment"
import Header from "../../../../components/Header"

type Props = {
    params: {
        slug: string
    }
}

export const revalidate = 60 //re-builds page every 60 in background

export async function generateStaticParams() {
    const query = groq`*[_type=='post']
    {
        slug
    }
    `
    const slugs: Post[] = await client.fetch(query)
    const slugRoutes = slugs.map((slug) => slug.slug.current)
    return slugRoutes.map((slug) => ({
        slug
    }))
}



async function Post({params:{slug}}: Props) {
const query = groq`
    *[_type=='post' && slug.current ==$slug] [0]
    {
        ...,
        author ->,
        categories[]->,
        'comments': *[
        _type == "comment" &&
        post._ref == ^._id &&
        approved == true
        ],
        
    }
    `   
    const post: Post = await client.fetch(query, {slug}) 


  return (
    <article className="px-10 pb-28">
        <section className="space-y-2 ">
            <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                    <Image
                    className="object-cover object-center mx-auto"
                    src={urlFor(post.mainImage).url()}
                    alt={post.author.name}
                    fill
                    />
                </div>
                <section className="p-5 bg-[#F6AE2D] w-full ">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div>
                            <h1 className="text-4xl font-extrabold">{post.title}</h1>
                            <p>{new Date(post._createdAt).toLocaleDateString("en-US",
                           {
                             day: "numeric",
                             month: "long",
                             year: "numeric",
                           }
                            )}</p>
                        </div>
                        <div className="flex max-lg:absolute bottom-5 md:justify-end items-center space-x-2 ">
                            <Image
                            className="rounded-full"
                            src={urlFor(post.author.image).url()}
                            alt={post.author.name}
                            width={40}
                            height={40}
                            />
                            <div className=" w-64">
                                <h3>{post.author.name}</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="italic pt-10  ">
                            {post.description}
                        </h2>
                        <div className="flex items-center justify-end mt-auto space-x-2 ">
                            {post.categories.map(category => (
                                <div key={category._id} className="rounded-full bg-myGrey px-4 py-2">
                                    <p className="text-white">{category.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <PortableText 
        value={post.body}
        components={RichTextComponents}
        />

        <Comment post={post}/>
        <section className="flex flex-col max-w-lg mx-auto">
            <h3 className="text-4xl pb-4 mb-4 text-center w-full border-b-2 border-b-myBlue">Comments</h3>
            <div>{post.comments.map((comment) => (
                <div key={comment._id}>
                    <p className="p-4"><span className="font-bold text-myGrey ">{comment.name}:</span> {comment.comment}</p>
                    <hr className="w-full border-b-2 border-myBlue"/>
                </div>
            ))}</div>
        </section>
    </article>
  )
}

export default Post