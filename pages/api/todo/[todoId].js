const connectDB = require('../../../middlewares/connectDB');
const todoModel = require('../../../models/todo');
export default async function TodoOperations ( req, res) {
    await connectDB();
    let {todoId} = req.query;
    if(req.method === 'GET'){
        const todos = await todoModel.findOne({_id:todoId});
        res.json(todos);
    }

    if(req.method === 'DELETE'){
        await todoModel.deleteOne({_id: todoId});
        res.send("Deleted successfully");
    }

    if(req.method === 'PUT'){
        await todoModel.updateOne({_id: todoId},{$set: req.body});
        res.send('Updated successfully');
    }
}