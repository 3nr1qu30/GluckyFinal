const bcrypt = require('bcrypt');

const encrypt = async (Password) =>{
    const hash = await bcrypt.hash(Password, 10);
    return hash;
};

const compare = async(Password, hashPassword) =>{
    return await bcrypt.compare(Password, hashPassword);
}

module.exports={encrypt,compare};