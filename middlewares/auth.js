const jwt = require("jsonwebtoken");

const auth = (userRole = []) => {
    return (req,res,next) => {
        const reqHeader = req.headers['authorization'];
        const token = reqHeader && reqHeader.split(' ')[1];
    
        if(token == null)  return res.send({"message":"Token is missing"});
       
        jwt.verify(token,process.env.SECRET_KEY,(err,user) => {
             if(err) return res.send(err);
             if(!userRole.includes(user.role)){
                return res.send({"message":"Unauthorized access"});
             }
             req.user = user;
             next();
        });
    }
}

module.exports = auth;