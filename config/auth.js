import jwt from 'jsonwebtoken';

//rota token login

const verifyToken = (token, res) => {
    jwt.verify(
        token, 
        process.env.JWT_SECRET, 
        (err, authData) => {
            if (err) {
                res.sendStatus(403)
            } else {
                res.json({authData})
            }
        }
    )
};

export default verifyToken;