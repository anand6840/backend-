
const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
    // console.log(req.headers.authorization)

    const token = req.headers.authorization.split(" ")[1];
    
    try {
        
        var decoded = jwt.verify(token, 'anand');
        const userID = decoded.userID;
        req.body.userID = userID;

        console.log(decoded)
        
        
            next();
        
    } catch (error) {
        
        res.status(401).send("Unautherized")
        // res.send("Wrong");
        
    }


    // console.log(token)
    // next();
}

module.exports={authentication}