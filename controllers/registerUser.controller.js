const User = require('../db/user.schema');

const registerUser = async (req,res) => {

    const { name, email, role } = req.body;

    try{

        const findUser = await User.findOne({where:{email:email}});
        if(findUser){
            res.send({'message':"User is already registered"});
        }
        else{
            const addUser = await User.create({name,email,role});
            if(addUser){
                res.send({'message':"User added successfully"});
            }
        }
    }
    catch(err){
        res.send(err);
    }
}

module.exports = {registerUser};