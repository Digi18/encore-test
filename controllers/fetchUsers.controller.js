const User = require('../db/user.schema');

const fetchUsers = async (req,res) => {

    const data = await User.findAll({
        attributes:['id','name','email','role']
    });
    res.send({"data":data});
}

module.exports = {fetchUsers};