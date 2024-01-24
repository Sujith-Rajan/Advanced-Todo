import dbConnect from "../../../util/mongo";
import Project from "../../../modals/Project.js"

const handler = async (req,res) => {
    const {method} = req

    await dbConnect()

    if(method === 'POST'){
       const {title,desc,link,imageUrl} = req.body
        try{
            
            const project = await Project.create(req.body)
            res.status(200).json(project)
        }
        catch(err){
            console.log(err)
            res.status(500).json(err)
        }
    }

    if(method === 'GET'){
        try{
            const projects = await Project.find()
            if(!projects){
               return res.status(404).json({message:"No projects added"})
            }
            res.status(200).json(projects)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
}

export default handler