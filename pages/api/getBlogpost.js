import * as fs from 'fs'

export default function getBlogPost(req, res){
    fs.readdir('blogposts',(err, files) => {
        if (err){
            res.status(500).json({"error":"some internal server error occured"})
        }
        else{
            res.status(200).json(files);
        }
    })
    
}