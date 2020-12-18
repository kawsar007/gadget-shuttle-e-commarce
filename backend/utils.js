import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        // eslint-disable-next-line no-undef
        process.env.JWT_SECRET || 'somethingsecret', {
            expiresIn: '30d'
        }
    );
};

// export const isAuth = (req, res, next) => {
//     const authorization = req.headers.authorization;
//     if (authorization) {
//         const token = authorization.slice(7, authorization.length);
//         jwt.verify(token,
//             // eslint-disable-next-line no-undef
//             process.env.JWT_SECRET || 'somethingsecret',
//             (err, decode) => {
//                 if (err) {
//                     res.status(401).send({ message: 'Invalid Token' });
//                 } else {
//                     req.user = decode;
//                     next();
//                 }
//             })
//     } else {
//         res.status(401).send({ message: 'No Token' });
//     }
// };

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length);
        // eslint-disable-next-line no-undef
        jwt.verify(token, process.env.JWT_SECRET || 'somethingsecret',
            (err, decode) => {
                if (err) {
                    res.status(401).send({ message: 'Invalid Token' });
                } else {
                    req.user = decode;
                    next();
                }
            }
        )
    } else {
        res.status(401).send({ message: 'No Token' });
    }
}

// Live
//PAYPAL_CLIENT_ID=AfRiK3JKf7oL4aC3Ecf2G8h0lILVxhP9YyFFBK7WgFFzc4dXFsdYpvvkW6Tve3_KO1BMlbsIN__07O4g

//PAYPAL_CLIENT_ID=ASausuN8lH10ERiXWsC7J21kG-CQofQyFPtjx8hCjUaN7PtHBRoucOrJ7wDtzqL_VIMOX332p3wSEwdC