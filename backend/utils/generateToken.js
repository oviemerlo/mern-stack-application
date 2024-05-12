import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    //use JWT to create the token, and include userId in the token payload
    //to help in identifying the user on subsequent sessions
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
//set the cookie on client browser using
//res.cookie('name of cookie', value of cookie, {configuration options of the cookie})
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
 
     })
}

export default generateToken;
