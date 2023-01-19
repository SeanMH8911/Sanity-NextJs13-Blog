import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
    types: {
        image: ({value}: any) => {
            return(
                <div className="relative w-full h-96 m-10 mx-auto">
                <Image 
                className="object-contain"
                src={urlFor(value).url()}
                alt="Blog Post Image"
                fill
                />
                </div>
            )
        }
    },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({children}: any) => <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>,
    number: ({children} : any) => <ol className="m list-decimal">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({children} : any) => <ol className="m-auto text-lg">{children}</ol>,
  },
    block: {
    // Ex. 1: customizing common block types
    h1: ({children} : any) => <h1 className="text-5xl pt-8 pb-4 font-bold">{children}</h1>,
    h2: ({children} : any) => <h1 className="text-4xl pt-8 pb-4 font-bold">{children}</h1>,
    h3: ({children} : any) => <h1 className="text-3xl pt-8 pb-4 font-bold">{children}</h1>,
    h4: ({children} : any) => <h1 className="text-2xl pt-8 pb-4 font-bold">{children}</h1>,
    blockquote: ({children} : any) => <blockquote className="border-l-purple-500 border-l-4 pl-5 py-5 my-5">{children}</blockquote>,
  },
    marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({children} : any) => <em className="text-gray-600 font-semibold">{children}</em>,

    // Ex. 2: rendering a custom `link` annotation
    link: ({value, children} : any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <Link
        href={value.href}
        rel={rel}
        className="underline decoration-myYellow hover:decoration-black"
        >{children}</Link>
      )
    },
  },
}

