const bcrypt = require('bcryptjs')
const { request } = require('../app')
const User = require('./../models/user')
const jsontoken = require('jsonwebtoken')

exports.signup = (req, res, next) =>{
    console.log("sign up")

    bcrypt.hash(req.body.password, 10)
        .then(hash =>{
            console.log("Creating new user")
            const user = new User({
                email:req.body.email,
                password:hash
            })
        user.save()
            .then(()=> res.status(201).json({message: 'user create'}))
            .catch(error=> res.status(400).json({error}))
    })
    .catch(error=> res.status(500).json({error}))
}

exports.login = (req, res, next) =>{
    User.findOne({email: req.body.email})
        .then(user=>{
            if(!user){
                return res.status(401).json({error: 'no user found'})
            }
            bcrypt.compare(req.body.password, user.password)
                .then(ok =>{
                    if(!ok){
                        return res.status(401).json({error: 'wrong password'})
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jsontoken.sign(
                            {userId: user._id}, 'LeDMfrqJahLs74FR', { algorithm: 'HS256' }, {expiresIn: "48h"}
                        )
                    })
                })
                .catch(error=> res.status(500).json({error}))
        })
}