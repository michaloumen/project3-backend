import jwt, { decode } from 'jsonwebtoken';

export const getToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,

    }, process.env.JWT_SECRET, {
        expiresIn: process.env.EXPIRATION_AUTH_TOKEN
    })
}
/* '48h' */

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length); //bearear XXXXXX -- dai pega só a parte do token
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                res.status(401).send({ message: 'Token inválido' });
            } else {
                req.user = decode;
                next();
            }
        });
    } else {
        res.status(401).send({ message: 'Sem token' });
    }
};