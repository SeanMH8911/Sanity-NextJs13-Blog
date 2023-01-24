import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";


type Props = {
    posts: [Post];
}

function BlogList({posts}: Props) {
  
  return (
    <div className="max-w-6xl mx-auto">
        <hr className="border-[#FF09CE] mb-10"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 gap-y-16 pb-24">
            {posts.map (post => (
              <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
                  <div  className="flex flex-col group cursor-pointer">
                    <div className="relative w-full h-80 drop-shadow-xl md:group-hover:scale-110 transition-transform duration-200 ease-out">
                        <Image 
                        className="object-cover object-left lg:object-center"
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill
                        sizes=" (max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                        />
                         <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between items-center">
                       <div>
                         <p className="font-bold">{post.title}</p>
                        <p>
                            {new Date(post._createdAt).toLocaleString(
                                "en-US", {
                                    day:"numeric",
                                    month: "long",
                                    year:"numeric",
                                }
                            )}
                        </p>
                       </div>
                       <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                            {post.categories.map(category => (
                                <div className="rounded-full bg-myYellow px-2 py-1">
                                    <p>{category.title}</p>
                                </div>
                            ))}
                        </div>
                        </div>
                    </div>
                   <div className="mt-5 flex-1">
                    <p className="underline text-lg font-bold">{post.title}</p>
                    <p className="line-clamp-2 text-gray-500">{post.description}</p>
                   </div>
                   <p className="flex">Read Post 
                    <ArrowUpRightIcon className="ml-2 h-4 w-4"/>
                   </p>
                </div>
              </ClientSideRoute>
            ))}
        </div>
    </div>
  )
}

export default BlogList