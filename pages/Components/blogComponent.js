import Link from "next/link";

const BlogComponent = (props) => {
    return (
        <div className="popular_blog_item mt-8">
            <Link href={`/blogpost/${props.slug}`}><h3 className="text-lg font-medium text-left text-gray-800 mb-5">{props.heading}?</h3></Link>
            <p className="font-normal text-gray-600 text-lg text-left">{props.content}</p>
        </div>
    )
}

export default BlogComponent;
