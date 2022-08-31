const User = require('../db/user.schema');
const jwt = require('jsonwebtoken');

const loginUser = async (req,res) => {
    
    const {email} = req.body;
    const user = await User.findOne({where:{email:email}});
    if(user === null){
        res.send({"message":"User not found"});
    }
    else{ 
        const userData = {
            id:user.id,
            name:user.name,
            email:user.email,
            role:user.role
        }
        const token = jwt.sign(userData,process.env.SECRET_KEY);
        res.send({"token":token});
    }
}

module.exports = {loginUser};