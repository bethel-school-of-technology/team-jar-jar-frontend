const jwt = require('jsonwebtoken');
const user = require('../models/user');
const secretKey = 'whydoineedasecretkey'
module.exports ={
    createJWT: (user) => {
    const token = jwt.sign({
        email: user.email,
        id: user.id
    },
    secretKey,
    {
        expiresIn: '24h'
    });
    return token;
},
        verifyUser: (token) => {
            try {
                const decodedPayload = jwt.verify(token, secretKey);
                return user.findByPk(decodedPayload.id);
            } catch (err){
                return ("Your token has expired");
            }
        }
};