import dbConnect from '../../../util/mongo.js'
import Todo from '../../../modals/Todo.js'

const handler = async (req,res) => {
  const {method,query:{id}} = req
 
  await dbConnect()

  if(method === 'PUT'){
  
    try{
        const todo = await Todo.findByIdAndUpdate(id,req.body,{new: true,})
        res.status(200).json(todo)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err) 
    }
  }

  if(method === 'DELETE'){
    try{
        const todo = await Todo.findByIdAndDelete(id)
        res.status(200).json(todo)
    }
    catch(err){
      res.status(500).json(err)
    }
  }
}
export default handler