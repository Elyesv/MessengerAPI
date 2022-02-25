const jsontoken = require('jsonwebtoken')

module.exports = (req, res, next)=>{
    console.log('####################################################')
    console.log('Authentification en cours')
    const decodedToken = jsontoken.verify(req.headers.authorization.split(' ')[1], 'LeDMfrqJahLs74FR').userId
    if(req.headers.userid !== "null"){
        if( req.headers.userid && req.headers.userid != decodedToken){
            throw 'Wrong ID'
        }
        else{
            next()
        }
    } else{
        res.status(401).json({error: "Can't connect"})
    }
}