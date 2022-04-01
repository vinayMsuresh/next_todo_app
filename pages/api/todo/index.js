const ConnectDB = require('../../../middlewares/connectDB');
const todoModel = require('../../../models/todo');
export default async function User (req, res) {
    await ConnectDB();
    if(req.method === 'POST'){  
        let user = new todoModel(req.body);
        await user.save();
        res.send('Inserted successfully');
    }
    if(req.method === 'GET'){
        const users = await todoModel.find({});
        res.status(200).json({users});
    }
}