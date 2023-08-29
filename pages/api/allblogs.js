export default async function getBlogPost(req, res){
    try{
        let files = await fetch('http://localhost:3000/api/getBlogpost',{method:"GET"});
        files = await files.json();
        let responseArr = files.map(async (filename) => {
            let filedata = await fetch('http://localhost:3000/api/blog?slug='+filename,{method:"GET"});
            filedata = await filedata.json();
            return filedata;
        })
        let responsearr = await Promise.all(responseArr);
        res.status(200).json(responsearr);
    }
    catch(err){
        res.status(400).json({"error":"some internal server error occured"});
    }
}