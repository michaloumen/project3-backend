import jwt from 'jsonwebtoken';

export const getToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,

    }, process.env.JWT_SECRET, {
        expiresIn: '48h'
    })
}

// export const isAuth = (req, res, next) => {
//     const authorization = req.headers.authorization;
//     if (authorization) {
//         const token = authorization.slice(7, authorization.length); /* Barear XXXXXXx */
//         jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
//             if (err) {
//                 return res.status(401).send({ msg: "Token Inválido" });
//             }
//             req.user = decode;
//             next();
//             return
//         });
//     } else {
//         return res.status(401).send({ msg: "Token não foi fornecido" })
//     }
// };

// export const isAdmin = (req, res, next) => {
//     if (req.user && req.user.isAdmin) {
//         return next();
//     }
//     return res.status(401).send({ msg: "Admin Token não é valido" })
// };

/* isAdmin e isAuth não estão funcionando :() */
