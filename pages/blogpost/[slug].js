import {useRouter} from 'next/router'
import { useEffect } from 'react';
import { useState } from 'react';

const Post = () => {
    const router = useRouter();
    let {slug} = router.query;

    let [heading,setHeading] = useState("");
    let [content,setContent] = useState("");
    let [author,setAuthor] = useState("");

    useEffect(() => {
        (async ()=>{
            let data = await fetch('http://localhost:3000/api/blog?slug='+slug+'.json', {method:"GET"});
            data = await data.json();
            console.log(slug);
            setHeading(data.heading);
            setContent(data.content);
            setAuthor(data.author);
        })();
    })

    return(
        <div className="w-[80%] m-auto">
            <h2 className="blog_post_heading text-center font-medium text-3xl mt-[80px] text-gray-900">{heading}</h2>
            <div className="line_under_heading w-[100%] h-[2px] bg-red-500 my-8"></div>
            <div className='content text-centre relative'>
                <p>{content}</p>
                <p className='absolute right-9 font-medium text-lg mt-5'>~{author}</p>
            </div>
        </div>
    )
}

export default Post;