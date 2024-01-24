import dbConnect from "../../../util/mongo";
import Todo from "../../../modals/Todo.js";

const handler = async (req,res) =>{
    const {method} = req
     
    await dbConnect()
    
    if(method === 'POST'){
        try{
            const todo = await Todo.create(req.body)
            res.status(201).json(todo)
        }
        catch(err){
            console.log(err)
            res.status(500).json(err)
        }
    }
    if(method === 'GET'){
        try{
            const todos = await Todo.find()
            res.status(200).json(todos)
        }
        catch(err){
            console.log(err)
            res.status(500).json(err)
        }
    }
    


}

export default handler