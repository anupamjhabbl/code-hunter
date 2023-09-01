import BlogComponent from "./Components/blogComponent"
import { useState, useEffect } from "react";

const Blogs = (props) => {
    const [blogarr, setBlogArr] = useState(props.arr);

    // useEffect(() => {
    //     (async () =>{
    //         let arr = await fetch('http://localhost:3000/api/allblogs',{method:"GET"});
    //         arr = await arr.json();
    //         setBlogArr(arr);
    //     })();
    // },[])

    return (
        <div className="w-[80%] m-auto">
            <div className="popular_blogs mt-[70px]">
                <h2 className=" text-2xl font-lg text-left mt-[30px] text-red-500">Popuar Blogs</h2>
                {
                    blogarr.map((blogObject) => {
                        return <BlogComponent key={blogObject.slug} heading={blogObject.heading} content={blogObject.content} author={blogObject.author} slug={blogObject.slug}/>
                    })
                }
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    let arr = await fetch('http://localhost:3000/api/allblogs',{method:"GET"});
    arr = await arr.json();
    return { props:{arr}}
  }

export default Blogs;
