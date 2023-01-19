
type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Post extends Base  {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug:Slug;
    title: string;
    comments: Comment[];
    description: string;
}
interface Comment {
    approved: boolean;
    comment: string;
    email:string;
    name:string;
    post: {
        _ref: string;
        _type: string;
        to: [
        {type: 'post'}
      ]
    };
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}


interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug:Slug;
}

interface Reference{
    _ref: string;
    _type: "reference"
}
interface Image{
    asset: Reference;
    _type: "image"
}
interface Slug{
    current: string;
    _type: "slug"
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text:string;
}

interface Category extends Base {
    description: string;
    title: string;
}

interface MainImage {
    _type: "image"
    asset: Reference;
}

interface Title {
    _type: "string"
    current: string;
}

 interface IFormInput {
    _id: string;
    name: string;
    email: string;
    comment: string;
}

export interface Comment {
_createdAt:string
_id:string
_rev:string
_type:comment
_updatedAt:string
approved:boolean
comment:string
email:string
name:string
post: {
        _ref: string;
        _type: string;
        to: [
        {type: 'post'}
      ]
    };
}